import './Calendar.css'
import { DaysOfWeek } from '../DaysOfWeek/DaysOfWeek'
import { DaysPanel } from "../DaysPanel/DaysPanel"
import { ReactNode } from 'react'

export const Calendar = (): ReactNode => {

    return(
        <div className="calendar">
            <DaysOfWeek />
            <DaysPanel />
        </div>
    )
}