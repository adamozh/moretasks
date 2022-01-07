import { Box } from '@mui/material';
import './App.scss';
import { NavBar } from './components/NavBar';
import { SideBar } from './components/SideBar';
import { TaskView } from './components/TaskView';

function App() {
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
