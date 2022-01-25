import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from "@mui/material"
import { useState } from "react"
import { Tag } from "../entities/Tag"
import { Task } from "../entities/Task"
import { DateInput } from "./DateInput"
import { NameInput } from "./NameInput"
import { TagInput } from "./TagInput"

type EditDialogProps = {
    task: Task
    isOpen: boolean
    tags: Tag[]
    handleOpen: () => void
    handleClose: () => void
    handleUpdateTask: (newTask: Task) => void
}

export const EditDialog = (props: EditDialogProps) => {

    // States for controlled task input fields
    const [taskName, setTaskName] = useState<string>(props.task.name)
    const [taskTags, setTaskTags] = useState<Array<string>>(props.task.tags.map(tag => tag.name))
    
    const handleEdit = () => {
        if (taskName === "") {
            return;
        }
        const newTask = {
            ...props.task,
            name: taskName,
            tags: taskTags.map(tag => {
                return {
                    name: tag
                }
            })
        }
        props.handleUpdateTask(newTask)
        props.handleClose()
    }

    return (
        <Dialog open={props.isOpen} onClose={props.handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                <Stack sx={{ py: 1 }} spacing={1}>
                    <NameInput
                    name={taskName}
                    onChange={(event) => setTaskName(event.target.value)} />
                    <TagInput
                        tags={taskTags} options={props.tags}
                        onChange={(event, value) => setTaskTags(value)}/>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={handleEdit}>Edit</Button>
            </DialogActions>
        </Dialog>
)
}