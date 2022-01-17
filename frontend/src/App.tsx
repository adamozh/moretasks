import { Box } from '@mui/material';
import './App.scss';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { TaskView } from './components/TaskView';
import { Task } from './entities/task';

function App() {

    const tasks: Task[] = [
        {
            name: "Do Tutorial 3",
            done: false,
            tags: ["CS2040S", "schoolwork"]
        },
        {
            name: "Watch Lecture 3",
            done: false,
            tags: ["CS3230", "schoolwork"]
        },
        {
            name: "Bring coco out for a walk",
            done: false,
            tags: []
        },
        {
            name: "Create layout for moreTasks",
            done: false,
            tags: ["CVWO"]
        }
    ]

    return (
        <div className="App">
            <Box sx={{ display: "flex" }}>
                <NavBar />
                <SideBar />
                <TaskView />
            </Box>
        </div>
    );
}

export default App;
