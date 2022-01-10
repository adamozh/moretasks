import { Container, Toolbar } from "@mui/material"
import { TaskInputBox } from "./TaskInputBox"

export const TaskView = () => {
    return (
        <Container sx={{ py: 3 }} maxWidth="sm">
            <Toolbar />
            <TaskInputBox />
            
        </Container>
    )
}