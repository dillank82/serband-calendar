import { ReactNode } from 'react'
import { MonthSwitcher } from '../Switchers/MonthSwitcher/MonthSwitcher'
import { YearSwitcher } from '../Switchers/YearSwitcher/YearSwitcher'
import './CalendarHeader.css'

export const CalendarHeader = (): ReactNode => {

    return(
        <header className='calendar-header'>
            <MonthSwitcher />
            <YearSwitcher />
        </header>
    )
}