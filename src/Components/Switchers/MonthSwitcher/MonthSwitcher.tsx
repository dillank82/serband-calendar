import { useEffect, useRef, useState } from "react";
import { SerbandDate } from "../../../SerbandDate";
import '../Switchers.css'
import './MonthSwitcher.css'
import { useDateContext } from "../../../Context/useDateContext";

export const MonthSwitcher = () => {

    const { currentDate, setDate } = useDateContext()
    const shiftMonth = (shift: number): string => {
        const shiftedMonth = new SerbandDate(currentDate.getFullYear(), currentDate.getMonth() + shift, currentDate.getDay())
        return shiftedMonth.getMonthString()

    }

    const [extendedScroll, setExtendedScroll] = useState(false)
    
    const switcher = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        addEventListener('mousedown', (event)=>{if (switcher.current !== event.currentTarget)setExtendedScroll(false)})
    })

    const switchMonth = (dir: 'next' | 'prev') => {
        let x = 0
        if (dir == 'next') x = 1
        else if (dir == 'prev') x = -1
        setDate(new SerbandDate(currentDate.getFullYear(), currentDate.getMonth() + x, 1))
    }

    const scrollMonth = (event: React.WheelEvent<HTMLDivElement>) => {
        let dir: 'next' | 'prev' | undefined
        if (event.deltaY > 0) dir = 'next'
        else if (event.deltaY < 0) dir = 'prev'
        if (dir) switchMonth(dir)
    }

    return (
        <div className='switcher' ref={switcher}>
            <div className='btn' onClick={() => { switchMonth('prev') }}>{'<'}</div>
            <div className="extended-container">
                {
                    extendedScroll &&
                    <div className="shift-container">
                        <div className="month shift-month-2 gradient-2-top">
                            {shiftMonth(-2)}
                        </div>
                        <div className="month shift-month-1 gradient-1-top">
                            {shiftMonth(-1)}
                        </div>
                    </div>
                }
                <div className='month current-month' onWheel={(event) => scrollMonth(event)} onClick={() => {if (!extendedScroll) setExtendedScroll(true); else setExtendedScroll(false)}}>
                    {currentDate.getMonthString()}</div>
                {
                    extendedScroll &&
                    <div className="shift-container">
                        <div className="month shift-month-1 gradient-1-bot">
                            {shiftMonth(1)}
                        </div>
                        <div className="month shift-month-2 gradient-2-bot">
                            {shiftMonth(2)}
                        </div>
                    </div>
                }
            </div>
            <div className='btn' onClick={() => { switchMonth('next') }}>{'>'}</div>
        </div>
    )
}