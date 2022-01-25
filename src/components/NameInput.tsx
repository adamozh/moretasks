import { TextField } from "@mui/material"
import { ChangeEvent } from "react"

type NameInputProps = {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const NameInput = (props: NameInputProps) => {
    return (
        <TextField fullWidth label="Add a Task" variant="outlined" size="small" 
            value={props.name}
            onChange={props.onChange}/>
    )
}