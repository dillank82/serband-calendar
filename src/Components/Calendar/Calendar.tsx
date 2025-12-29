import './Calendar.css'
import { DaysOfWeek } from '../DaysOfWeek/DaysOfWeek'
import { DaysPanel } from "../DaysPanel/DaysPanel"
import { ReactNode } from 'react'

export const Calendar = (): ReactNode => {

    return(
        <table className="calendar">
            <thead>
                <DaysOfWeek />
            </thead>
            <tbody>
                <DaysPanel />
            </tbody>
        </table>
    )
}