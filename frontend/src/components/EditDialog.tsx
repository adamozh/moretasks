import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useContext } from "react"
import { Task } from "../entities/Task"
import { TaskInputBox } from "./TaskInputBox"

type EditDialogProps = {
    isOpen: boolean
    handleOpen: () => void
    handleClose: () => void
    handleUpdateTask: (newTask: Task) => void
}

export const EditDialog = (props: EditDialogProps) => {
    return (
        
        <Dialog open={props.isOpen} onClose={props.handleClose}>
            <DialogTitle>Subscribe</DialogTitle>
            <DialogContent>
                
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={props.handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
)
}