import { Box } from '@mui/material';
import './App.scss';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { TaskView } from './components/TaskView';
import { Tag } from './entities/Tag';
import { Task } from './entities/Task';
import { useEffect, useState } from 'react'
import { getTagsFromTasks, temporaryTags, temporaryTasks } from './data/TemporaryData';

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

    useEffect(() => {
        setTags(getTagsFromTasks(tasks))
    }, [tasks])

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
            return
        }
        const indexOfTaskToReplace = tasks.indexOf(taskToReplace)
        const updatedTasks = tasks
        updatedTasks[indexOfTaskToReplace] = newTask
        setTasks([...updatedTasks])
    }

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))

    }

    const handleToggleDone = (id: number) => {
        const targetTask = tasks.find(task => task.id === id)
        if (targetTask === undefined) {
            alert("There was an error marking the task done")
            return
        }
        const index = tasks.indexOf(targetTask)
        const newTasks = [...tasks]
        newTasks[index].done = !targetTask.done
        setTasks(newTasks)
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
                handleDeleteTask={handleDeleteTask}
                handleToggleDone={handleToggleDone} />
            </Box>
        </div>
    )
}

export default App;
