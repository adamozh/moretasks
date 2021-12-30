import "./Clock.scss"
import { useState, useEffect } from 'react'

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
            <div className='clock-date'>{date}</div>
            <div className='clock-time'>{time}</div>
        </div>
    )
}