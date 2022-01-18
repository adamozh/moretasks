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

    const [tasks, setTasks] = useState(temporaryTasks)

    const [tags, setTags] = useState(temporaryTags)

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
                <SideBar tags={tags}/>
                <TaskView tasks={tasks} tags={tags} handleSubmitNewTask={handleSubmitNewTask} />
            </Box>
        </div>
    );
}

export default App;
