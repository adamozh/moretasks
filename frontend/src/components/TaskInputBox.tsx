import { Box, Button, Grid, TextField } from "@mui/material"
import React, { ChangeEvent, MouseEvent, SyntheticEvent, useRef, useState } from "react"
import { Tag } from "../entities/Tag"
import { DateInput } from "./DateInput"
import { NameInput } from "./NameInput"
import { TagInput } from "./TagInput"
import './TaskInputBox.scss'

type TaskInputBoxProps = {
    options: Tag[]
}

export const TaskInputBox = (props: TaskInputBoxProps) => {
    const [taskName, setTaskName] = useState<string>("")
    const [taskTags, setTaskTags] = useState<Array<string>>([])
    const [taskDate, setTaskDate] = useState<Date | null>(null)

    const handleSubmit = () => {
        setTaskName("")
        setTaskTags([])
        setTaskDate(null)
        
    }

    // const handleOnFocus = () => {
    //     setIsFocusedInputBox(true)
    // }

    // const handleOnBlur = (event: any) => {
    //     if (!event.currentTarget.contains(event.relatedTarget) && taskName === "" && !isFocusedDatePicker) {
    //         setIsFocusedInputBox(false)
    //     }
    // }

    return (
        <Box sx={{ p: 2 , border: '0px solid #7c7c7c', borderRadius: 1, boxShadow: 3 }}>
            <Grid container borderRadius={2} rowSpacing={1} columnSpacing={1}>
                <Grid item xs={12} md={12}>
                    <NameInput 
                    name={taskName}
                    onChange={(event) => setTaskName(event.target.value)}/>
                </Grid>
                <Grid item xs={12} md={5}>
                    <TagInput
                    tags={taskTags} options={props.options}
                    onChange={(event, value) => setTaskTags(value)}/>
                </Grid> 
                <Grid item xs={12} md={5}>
                    <DateInput
                    date={taskDate}
                    onChange={(newDate) => setTaskDate(newDate)}/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button fullWidth sx={{ height: '100%' }} variant="contained" 
                    onClick={handleSubmit}>Add</Button>
                </Grid>
            </Grid>
        </Box>
    )
}