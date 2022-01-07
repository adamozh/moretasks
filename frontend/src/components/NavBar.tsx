import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { Clock } from "./Clock";

export const NavBar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                {/* <IconButton
                    size="large"
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    moreTasks
                </Typography>
                <Clock />
            </Toolbar>
        </AppBar>
    )
}