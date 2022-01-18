import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from "@mui/lab"
import { TextField } from '@mui/material';

type DateInputProps = {
    date: Date | null
    onChange: (newDate: Date | null) => void
}

export const DateInput = (props: DateInputProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={props.date}
                inputFormat='dd/MM/yyyy'
                onChange={props.onChange}
                label="Date"
                renderInput={(params) => (
                    <TextField fullWidth size="small" variant="outlined" {...params}/>
                )}
            />
        </LocalizationProvider>
    )
}