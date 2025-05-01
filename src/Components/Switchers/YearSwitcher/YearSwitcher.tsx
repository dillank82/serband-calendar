import { useDateContext } from '../../../Context/DateContext'
import { SerbandDate } from '../../../SerbandDate'
import { YearInput } from '../../YearInput/YearInput'
import '../Switchers.css'

export const YearSwitcher = () => {

    const {currentDate, setDate} = useDateContext()

    const switchYear = (dir: 'next'|'prev') => {
        let x = 0
        if (dir == 'next') x = 1
        else if (dir == 'prev') x = -1
        setDate(new SerbandDate(currentDate.getFullYear() + x, currentDate.getMonth(), 1))
    }

    return(
        <div className='switcher'>
            <div className='btn' onClick={()=>{switchYear('prev')}}>{'<'}</div>
            <YearInput />
            <div className='btn' onClick={()=>{switchYear('next')}}>{'>'}</div>
        </div>
    )
}