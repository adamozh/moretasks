import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';

const drawerWidth = 240

export const SideBar = () => {
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
                    {['CS2040S', 'CS2103T', 'Music', 'Cooking'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <LocalOfferOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}