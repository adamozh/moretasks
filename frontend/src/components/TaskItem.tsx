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
                <MoreButton 
                task={props.task}
                tags={props.tags}
                handleDeleteTask={props.handleDeleteTask}
                handleUpdateTask={props.handleUpdateTask}/>
            </Stack>
            <Stack direction='row' spacing={0.5} >
                {currentTask.tags.map((tag, index) => {
                    return <Chip variant='outlined' size='small' label={tag.name} key={index}/>
                })}
            </Stack>
        </Box>
    )
}