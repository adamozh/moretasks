import { Box, Checkbox, Chip, ClickAwayListener, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { Task } from "../entities/Task"
import './TaskItem.scss'
import { MoreButton } from "./MoreButton";
import { Tag } from "../entities/Tag";

type TaskItemProps = {
    task: Task
    tags: Tag[]
    handleUpdateTask: (newTask: Task) => void
    handleDeleteTask: (id: number) => void
    handleToggleDone: (id: number) => void
}

export const TaskItem = (props: TaskItemProps) => {
    
    const [boxShadowValue, setBoxShadowValue] = useState(0)

    const handleCheck = (event: any, check: boolean) => {
        props.handleToggleDone(props.task.id)
    }

    return (
        <Box 
        sx={{ borderRadius: 1, boxShadow: boxShadowValue, opacity: props.task.done ? 0.6 : 1 }}
        onMouseEnter={() => setBoxShadowValue(3)}
        onMouseLeave={() => setBoxShadowValue(0)}
        className="task-item">
            <Stack direction='row' alignItems='center'>
                <Checkbox checked={props.task.done} onChange={handleCheck} />
                <Typography variant="body1">{props.task.name}</Typography>
                <MoreButton 
                task={props.task}
                tags={props.tags}
                handleDeleteTask={props.handleDeleteTask}
                handleUpdateTask={props.handleUpdateTask}/>
            </Stack>
            <Stack direction='row' spacing={0.5} >
                {props.task.tags.map((tag, index) => {
                    return <Chip variant='outlined' size='small' label={tag.name} key={index}/>
                })}
            </Stack>
        </Box>
    )
}