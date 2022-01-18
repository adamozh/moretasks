import { Box, Checkbox, Chip, ClickAwayListener, Stack, TextField, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { Tag } from "../entities/Tag"
import { Task } from "../entities/Task"
import './TaskItem.scss'

type TaskItemProps = {
    task: Task
}

export const TaskItem = (props: TaskItemProps) => {

    const task = props.task

    const [boxShadowValue, setBoxShadowValue] = useState(0)
    const [isEditing, setIsEditing] = useState(false)

    const NameEditField = () => {
        return (
            <ClickAwayListener onClickAway={() => setIsEditing(false)}>
                <TextField autoFocus sx={{ width: '100%', paddingRight: 3 }} id="standard-basic" label="" variant="standard" value={task.name}/>
            </ClickAwayListener>
        )
    }

    const Name = () => {
        return (
            <Typography onClick={() => setIsEditing(true)} variant="body1">{task.name}</Typography>
        )
    }

    return (
        <Box 
        sx={{ borderRadius: 1, boxShadow: boxShadowValue }}
        onMouseEnter={() => setBoxShadowValue(3)}
        onMouseLeave={() => setBoxShadowValue(0)}
        className="task-item">
            <Stack direction='row' alignItems='center'>
                <Checkbox checked={task.done} />
                {isEditing ? <NameEditField /> : <Name />}
            </Stack>
            <Stack direction='row' spacing={0.5} >
                {props.task.tags.map((tag: Tag, index: number) => {
                    return <Chip variant='outlined' size='small' label={tag.name} key={index}/>
                })}
            </Stack>
        </Box>
    )
}