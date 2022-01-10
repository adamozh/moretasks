import { Box, Button, Grid, TextField } from "@mui/material"
import { DateInput } from "./DateInput"
import { TagInput } from "./TagInput"

export const TaskInputBox = () => {
    return (
        <Box sx={{ p: 2 , border: '0px solid #7c7c7c', borderRadius: 1, boxShadow: 3 }}>
                <Grid container borderRadius={2} rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField fullWidth id="filled-basic" label="Add a Task" variant="outlined" size="small" />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TagInput />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <DateInput />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button fullWidth sx={{ height: '100%' }} variant="contained">Add</Button>
                    </Grid>
                </Grid>
            </Box>
    )
}