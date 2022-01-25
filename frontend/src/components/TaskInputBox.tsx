import { Box, Button, Grid, TextField } from "@mui/material"
import React, { ChangeEvent, MouseEvent, SyntheticEvent, useRef, useState } from "react"
import { Tag } from "../entities/Tag"
import { Task } from "../entities/Task"
import { DateInput } from "./DateInput"
import { NameInput } from "./NameInput"
import { TagInput } from "./TagInput"
import './TaskInputBox.scss'

type TaskInputBoxProps = {
    options: Tag[]
    handleSubmitNewTask: (newTask: Task) => void
}

export const TaskInputBox = (props: TaskInputBoxProps) => {
    // States for controlled task input fields
    const [taskName, setTaskName] = useState<string>("")
    const [taskTags, setTaskTags] = useState<Array<string>>([])

    // Handles what happens when the user submits a new task
    const handleSubmitButtonClick = () => {
        if (taskName === "") {
            return
        }
        const newTask: Task = {
            id: 0,
            name: taskName,
            done: false,
            tags: taskTags.map(tag => {
                return {
                    name: tag
                }
            })
        }
        props.handleSubmitNewTask(newTask)
        setTaskName("")
        setTaskTags([])
    }

    return (
        <Box sx={{ p: 2 , border: '0px solid #7c7c7c', borderRadius: 1, boxShadow: 3 }}>
            <Grid container borderRadius={2} rowSpacing={1} columnSpacing={1}>
                <Grid item xs={12} md={12}>
                    <NameInput 
                    name={taskName}
                    onChange={(event) => setTaskName(event.target.value)}/>
                </Grid>
                <Grid item xs={12} md={10}>
                    <TagInput
                    tags={taskTags} options={props.options}
                    onChange={(event, value) => setTaskTags(value)}/>
                </Grid> 
                <Grid item xs={12} md={2}>
                    <Button fullWidth sx={{ height: '100%' }} variant="contained" 
                    onClick={handleSubmitButtonClick}>Add</Button>
                </Grid>
            </Grid>
        </Box>
    )
}