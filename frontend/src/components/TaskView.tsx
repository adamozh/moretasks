import { Container, Toolbar } from "@mui/material"
import { TaskInputBox } from "./TaskInputBox"
import { TaskItem } from "./TaskItem"

export const TaskView = () => {
    return (
        <Container sx={{ py: 3 }} maxWidth="sm">
            <Toolbar />
            <TaskInputBox />
            <br />
            <br />

            <TaskItem />
        </Container>
    )
}