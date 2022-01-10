import { Box, Container, Divider, Stack, TextField, Toolbar } from "@mui/material"
import React from "react"
import { DateInput } from "./DateInput"
import { TagInput } from "./TagInput"

export const TaskView = () => {
    return (
        <Container sx={{ p: 3 }} maxWidth="sm">
            <Toolbar />
            <Box sx={{ width: '100%', p: 2, border: '1px solid #8c8c8c', borderRadius: 2 }}>
                <TextField sx={{ width: '100%', marginBottom: 1 }} id="filled-basic" label="Add a Task" variant="standard" />
                <Stack direction="row" justifyContent="space-between">
                    <TagInput />
                    <DateInput />
                </Stack>
            </Box>
        </Container>
    )
}