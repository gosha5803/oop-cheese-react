import react, {useEffect, useState, useRef} from 'react'

import { Colors } from '../models/Colors'

interface TimerProps {
    currentPlayer:Colors
}

const TimerComponent: react.FC<TimerProps> = ({currentPlayer}) => {

    const [blackTime, setBlackTime] = useState<number>(300)
    const [whiteTime, setWhiteTime] = useState<number>(300)
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)
    let settedInterval: null | ReturnType<typeof setInterval> = null
    
    useEffect(() => {
        setupTimer()
    }, [currentPlayer])

    const setupTimer = () => {
        if(timer.current) {
            clearInterval(timer.current)
        }
        const cB = currentPlayer == Colors.BLACK ? decrementBlackTimer : decrementWhiteTimer
        timer.current = setInterval(() => {
            cB()
        }, 1000)
    } 

    const decrementBlackTimer = () => {
        setBlackTime(p => p-1)
    }
    const decrementWhiteTimer = () => {
 
        setWhiteTime(p => p-1)
    }

    return(
        <div
        style={{
            display:'flex',
            justifyContent:'space-between',
            padding:'10px',
            fontSize:'20px',
            fontWeight:'600'
        }}
        >
            <div>
                Black Time: {blackTime}
            </div>    
            <div>
                White Time: {whiteTime}
            </div>    
        </div>
    )
}

export default TimerComponent