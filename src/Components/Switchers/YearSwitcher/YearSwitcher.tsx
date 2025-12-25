import { useDateContext } from '../../../Context/useDateContext'
import { SerbandDate } from '../../../SerbandDate'
import { YearInput } from '../../YearInput/YearInput'
import '../Switchers.css'
import './YearSwitcher.css'

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
            <button className='btn' onClick={()=>{switchYear('prev')}}>{'<'}</button>
            <YearInput />
            <button className='btn' onClick={()=>{switchYear('next')}}>{'>'}</button>
        </div>
    )
}