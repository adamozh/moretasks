import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Task } from "../entities/Task";
import { EditDialog } from "./EditDialog";
import { Tag } from "../entities/Tag";

type MoreButtonProps = {
    task: Task
    tags: Tag[]
    handleDeleteTask: (id: number) => void
    handleUpdateTask: (task: Task) => void
}

export const MoreButton = (props: MoreButtonProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [editDialogIsOpen, setEditDialogIsOpen] = useState<boolean>(false)

    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ marginLeft: "auto" }}>
            <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
                <MoreHorizIcon />   
            </IconButton>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }} >
                <MenuItem onClick={() => setEditDialogIsOpen(true)}>Edit</MenuItem>
                <EditDialog 
                task={props.task}
                tags={props.tags}
                isOpen={editDialogIsOpen}
                handleOpen={() => setEditDialogIsOpen(true)}
                handleClose={() => setEditDialogIsOpen(false)}
                handleUpdateTask={props.handleUpdateTask} />
                <MenuItem onClick={() => props.handleDeleteTask(props.task.id)}>Delete</MenuItem>
            </Menu>
        </Box>
    )
}