import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from "@mui/lab"
import { useState } from 'react';
import { TextField } from '@mui/material';

export const DateInput = () => {
    const [taskDate, setTaskDate] = useState<Date | null>(null)

    return (
        <LocalizationProvider sx={{ width: '50%' }} dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Date"
                value={taskDate}
                onChange={(newValue) => {
                    setTaskDate(newValue)
                }}
                renderInput={(params) => (
                    <TextField variant="standard" {...params} />
                )}
            />
        </LocalizationProvider>
    )
}