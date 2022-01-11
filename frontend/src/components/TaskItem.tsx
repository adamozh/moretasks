import { Box, Typography } from "@mui/material"
import { useState } from "react"
import './TaskItem.scss'

export const TaskItem = () => {

    const [boxShadowValue, setBoxShadowValue] = useState(0)

    const handleMouseEnter = () => {
        setBoxShadowValue(3)
    }

    const handleMouseLeave = () => {
        setBoxShadowValue(0)
    }

    return (
        <Box 
        sx={{ borderRadius: 1, boxShadow: boxShadowValue }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="task-item"
        >
            <Typography variant="body1">Walk the dog!</Typography> 
        </Box>
    )
}