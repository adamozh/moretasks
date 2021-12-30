import { useState, useEffect } from 'react'

export const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString())
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        var intervalId = setInterval(() => {
            setDate(new Date().toLocaleDateString())
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        // return clearInterval(intervalId)
    })  
    
    return (
        <div className='clock'>
            <h1>{date}</h1>
            <h1>{time}</h1>
        </div>
    )
}