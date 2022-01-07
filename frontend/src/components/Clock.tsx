import "./Clock.scss"
import { useState, useEffect } from 'react'
import { Typography } from "@mui/material"

export const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString())
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        var intervalId = setInterval(() => {
            setDate(new Date().toLocaleDateString())
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })
    
    return (
        <div className='clock'>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>{date}</Typography>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, marginLeft: "1rem" }}>{time}</Typography>
        </div>
    )
}