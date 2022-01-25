import { Box, Container, Stack, Toolbar, Typography } from "@mui/material"
import { Tag } from "../entities/Tag"
import { Task } from "../entities/Task"
import { TaskInputBox } from "./TaskInputBox"
import { TaskItem } from "./TaskItem"

type TaskViewProps = {
    tasks: Task[]
    tags: Tag[]
    currentFilterTag: Tag | null
    handleSubmitNewTask: (newTask: Task) => void
    handleUpdateTask: (newTask: Task) => void
    handleDeleteTask: (id: number) => void
    handleToggleDone: (id: number) => void
}

export const TaskView = (props: TaskViewProps) => {

    const filterTasksByTag = (tag: Tag) => {
        return props.tasks.filter(task => {
            const tagStrings = task.tags.map(tag => tag.name)
            return props.currentFilterTag !== null && tagStrings.includes(props.currentFilterTag.name)
        })
    }

    // Group tasks into dates
    // useEffect(() => {
    //     const tasks = props.currentFilterTag === null ? props.tasks : filterTasksByTag(props.currentFilterTag)
    //     setGroupedTasks(getTasksGroupedByDate(tasks))
    // }, [props.currentFilterTag, props.tasks])

    const getUndoneTasks = (tasks: Task[]) => {
        tasks = props.currentFilterTag === null ? tasks : filterTasksByTag(props.currentFilterTag)
        return tasks.filter(task => !task.done)
    }

    const getDoneTasks = (tasks: Task[]) => {
        tasks = props.currentFilterTag === null ? tasks : filterTasksByTag(props.currentFilterTag)
        return tasks.filter(task => task.done)
    }

    return (
        <Container sx={{ py: 3 }} maxWidth="sm">
            <Toolbar />
            <TaskInputBox options={props.tags} handleSubmitNewTask={props.handleSubmitNewTask}/>
            <br />
            <Box>
                <Typography sx={{ marginTop: 2 }} variant="h5">To Do</Typography>
                <Stack spacing={1}>
                    {getUndoneTasks(props.tasks).map(task => <TaskItem 
                    task={task}
                    tags={props.tags}
                    key={task.id}
                    handleUpdateTask={props.handleUpdateTask}
                    handleDeleteTask={props.handleDeleteTask}
                    handleToggleDone={props.handleToggleDone} />)}
                </Stack>
            </Box>
            <Box>
                <Typography sx={{ marginTop: 2 }} variant="h5">Completed</Typography>
                <Stack spacing={1}>
                    {getDoneTasks(props.tasks).map(task => <TaskItem 
                    task={task}
                    tags={props.tags}
                    key={task.id}
                    handleUpdateTask={props.handleUpdateTask}
                    handleDeleteTask={props.handleDeleteTask}
                    handleToggleDone={props.handleToggleDone} />)}
                </Stack>
            </Box>
        </Container>
    )
}
