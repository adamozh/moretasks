import { Container, Stack, Toolbar } from "@mui/material"
import { Tag } from "../entities/Tag"
import { Task } from "../entities/Task"
import { TaskInputBox } from "./TaskInputBox"
import { TaskItem } from "./TaskItem"

type TaskViewProps = {
    tasks: Task[]
    tags: Tag[]
    handleSubmitNewTask: (newTask: Task) => void
}

export const TaskView = (props: TaskViewProps) => {
    return (
        <Container sx={{ py: 3 }} maxWidth="sm">
            <Toolbar />
            <TaskInputBox options={props.tags} handleSubmitNewTask={props.handleSubmitNewTask}/>
            <br/><br/>
            <Stack spacing={1}>
                {props.tasks.map((task, index) => <TaskItem task={task} key={index} />)}
            </Stack>

        </Container>
    )
}