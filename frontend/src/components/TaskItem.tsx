import { Box, Checkbox, Chip, ClickAwayListener, Stack, TextField, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import './TaskItem.scss'

export const TaskItem = () => {

    const [boxShadowValue, setBoxShadowValue] = useState(0)
    const [isEditing, setIsEditing] = useState(false)

    const NameEditField = () => {
        return (
            <ClickAwayListener onClickAway={() => setIsEditing(false)}>
                <TextField autoFocus sx={{ width: '100%', paddingRight: 3 }} id="standard-basic" label="" variant="standard" />
            </ClickAwayListener>
        )
    }

    const Name = () => {
        return (
            <Typography onClick={() => setIsEditing(true)} variant="body1">Walk the dog!</Typography>
        )
    }

    return (
        <Box 
        sx={{ borderRadius: 1, boxShadow: boxShadowValue }}
        onMouseEnter={() => setBoxShadowValue(3)}
        onMouseLeave={() => setBoxShadowValue(0)}
        className="task-item">
            <Stack direction='row' alignItems='center'>
                <Checkbox />
                {isEditing ? <NameEditField /> : <Name />}
            </Stack>
            <Stack direction='row' spacing={0.5} >
                <Chip variant='outlined' size='small' label="Hello"/>
                <Chip variant='outlined' size='small' label="Hello"/>
                <Chip variant='outlined' size='small' label="Hello"/>
                <Chip variant='outlined' size='small' label="Hello"/>
                <Chip variant='outlined' size='small' label="Hello"/>
            </Stack>
        </Box>
    )
}