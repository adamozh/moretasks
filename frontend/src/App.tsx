import { Box } from '@mui/material';
import './App.scss';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { TaskView } from './components/TaskView';
import { Tag } from './entities/Tag';
import { Task } from './entities/Task';
import { useEffect, useState } from 'react'
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
    const [filterTag, setFilterTag] = useState<Tag | null>(null);

    const handleSubmitNewTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
        const tagStrings = tags.map(tag => tag.name)
        newTask.tags.map(tag => {
            if (!tagStrings.includes(tag.name)) {
                setTags([...tags, tag])
            }
        })
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
                handleSubmitNewTask={handleSubmitNewTask} />
            </Box>
        </div>
    );
}

export default App;
