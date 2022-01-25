import { Box } from '@mui/material';
import './App.scss';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { TaskView } from './components/TaskView';
import { Tag } from './entities/Tag';
import { Task } from './entities/Task';
import { useState } from 'react'
import { temporaryTags, temporaryTasks } from './data/TemporaryData';

function App() {

    /**
     * Stores the state of all the tasks.
     */
    const [tasks, setTasks] = useState(temporaryTasks)

    /**
     * Stores the state of all the tags.
     */
    const [tags, setTags] = useState(temporaryTags)
    
    /**
     * Stores the state of current tag being filtered. Null means there is no filter.
     */
    const [filterTag, setFilterTag] = useState<Tag | null>(null)

    const handleSubmitNewTask = (newTask: Task) => {
        newTask.id = tasks.length
        setTasks([...tasks, newTask])
        const tagStrings = tags.map(tag => tag.name)
        newTask.tags.map(tag => {
            if (!tagStrings.includes(tag.name)) {
                setTags([...tags, tag])
            }
        })
    }

    const handleUpdateTask = (newTask: Task) => {
        const taskToReplace = tasks.find(task => task.id === newTask.id)
        if (taskToReplace === undefined) {
            alert("There was an error updating the task")
        } else {
            const indexOfTaskToReplace = tasks.indexOf(taskToReplace)
            const updatedTasks = tasks
            updatedTasks[indexOfTaskToReplace] = newTask
            setTasks([...updatedTasks])
        }
    }

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <Box sx={{ display: "flex" }}>
                <NavBar />
                <SideBar 
                tags={tags}
                onClickHandler={(newFilterTag) => setFilterTag(newFilterTag)}/>
                <TaskView
                tasks={tasks}
                tags={tags}
                currentFilterTag={filterTag}
                handleSubmitNewTask={handleSubmitNewTask}
                handleUpdateTask={handleUpdateTask}
                handleDeleteTask={handleDeleteTask} />
            </Box>
        </div>
    )
}

export default App;
