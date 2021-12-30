import { TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"


export const TaskInput = () => {
    const [taskName, setTaskName] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        
    }

    return (
        <form>
            <TextField 
            id="taskinput"
            label="Task Name" 
            variant="standard" 
            value={taskName} 
            onChange={handleChange}
            size="small"
            name="taskinput"
            />
        </form>
        
    )
}