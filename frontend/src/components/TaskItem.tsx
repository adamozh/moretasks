import { Box, Checkbox, Chip, ClickAwayListener, IconButton, Stack, TextField, Typography } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect } from "react"
import { Tag } from "../entities/Tag"
import { Task } from "../entities/Task"
import './TaskItem.scss'
import { MoreButton } from "./MoreButton";

type TaskItemProps = {
    task: Task
    handleUpdateTask: (newTask: Task) => void
}

export const TaskItem = (props: TaskItemProps) => {

    const [boxShadowValue, setBoxShadowValue] = useState(0)
    const [isEditing, setIsEditing] = useState(false)
    const [currentTask, setCurrentTask] = useState(props.task)

    const handleOnClickAway = () => {
        if (currentTask.name === "") {
            alert("Task name is empty!")
        } else {
            setIsEditing(false)
        }
        console.log(currentTask.id)
        props.handleUpdateTask(currentTask)
    }

    const NameEditField = () => {
        return (
            <ClickAwayListener onClickAway={handleOnClickAway}>
                <TextField 
                autoFocus
                sx={{ width: '100%', paddingRight: 3 }}
                id="standard-basic"
                label=""
                variant="standard"
                value={currentTask.name}
                onChange={(event) => setCurrentTask({...currentTask, name: event.target.value})}/>
            </ClickAwayListener>
        )
    }

    const Name = () => {
        return (
            <Typography onClick={() => setIsEditing(true)} variant="body1">{currentTask.name}</Typography>
        )
    }

    return (
        <Box 
        sx={{ borderRadius: 1, boxShadow: boxShadowValue }}
        onMouseEnter={() => setBoxShadowValue(3)}
        onMouseLeave={() => setBoxShadowValue(0)}
        className="task-item">
            <Stack direction='row' alignItems='center'>
                <Checkbox checked={currentTask.done} />
                {isEditing ? <NameEditField /> : <Name />}
                <MoreButton />
            </Stack>
            <Stack direction='row' spacing={0.5} >
                {currentTask.tags.map((tag, index) => {
                    return <Chip variant='outlined' size='small' label={tag.name} key={index}/>
                })}
            </Stack>
        </Box>
    )
}