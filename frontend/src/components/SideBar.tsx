import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { Tag } from "../entities/Tag";

const drawerWidth = 240

type SideBarProps = {
    tags: Tag[]
}

export const SideBar = (props: SideBarProps) => {
    return (
        <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem button key={"Tasks"}>
                    <ListItemIcon>
                        <TaskOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Tasks"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {props.tags.map((tag, index) => (
                        <ListItem button key={tag.name}>
                            <ListItemIcon>
                                <LocalOfferOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={tag.name} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}