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

    const [tasks, setTasks] = useState(temporaryTasks)

    const [tags, setTags] = useState(temporaryTags)

    const submitNewTask = (newTask: Task) => {
        setTasks([...tasks, newTask])
        setTags([...tags, ...newTask.tags])
    }

    return (
        <div className="App">
            <Box sx={{ display: "flex" }}>
                <NavBar />
                <SideBar tags={tags}/>
                <TaskView tasks={tasks} tags={tags}/>
            </Box>
        </div>
    );
}

export default App;
