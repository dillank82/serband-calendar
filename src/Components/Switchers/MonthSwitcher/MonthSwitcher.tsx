import { useDateContext } from "../../../Context/DateContext";
import { SerbandDate } from "../../../SerbandDate";
import '../Switchers.css'

export const MonthSwitcher = () => {

    const {currentDate, setDate} = useDateContext()

    const switchMonth = (dir: 'next'|'prev') => {
        let x = 0
        if (dir == 'next') x = 1
        else if (dir == 'prev') x = -1
        setDate(new SerbandDate(currentDate.getFullYear(), currentDate.getMonth() + x, 1))
    }

    return(
        <div className='switcher'>
            <div className='btn' onClick={()=>{switchMonth('prev')}}>{'<'}</div>
            <div className='label'>{currentDate.getMonthString()}</div>
            <div className='btn' onClick={()=>{switchMonth('next')}}>{'>'}</div>
        </div>
    )
}