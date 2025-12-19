import './DaysPanel.css'
import { SerbandDate } from '../../SerbandDate'
import { useDateContext } from '../../Context/useDateContext'

export const DaysPanel = () => {
    const { currentDate, realDate } = useDateContext()

    const getFirstDayOfMonth = (date: SerbandDate) => {
        return new SerbandDate(date.getFullYear(), date.getMonth(), 1)
    }

    const renderDays = () => {
        const month = currentDate.getMonth()
        const daysInMonth = currentDate.getDaysInMonth()
        const firstDay = getFirstDayOfMonth(currentDate).getWeekday()
        const emptyCells = firstDay === 0 ? 6 : firstDay - 1
        const days = []
        let extraCount = 0

        for (let i = 0; i < emptyCells; i++) {
            days.push(<div className="empty-day" key={`empty-${i}`}></div>)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const realDay = currentDate.getFullYear() === realDate.getFullYear() && currentDate.getMonth() === realDate.getMonth() && day === realDate.getDay()
            const typeOfDay = () => {
                const extraDays = Object.values(currentDate.extraDaysInYear())
                
                if (extraDays.some(d => d.month == month && d.day == day)) {
                    let symbol
                    extraDays.forEach(d => {
                        if (d.month == month && d.day === day) {
                            symbol = d.short
                        }
                    })
                    extraCount+=1
                    return symbol
                } else {
                    return day - extraCount
                }
            }
            days.push(
                <div className={realDay ? ' real-day' : 'day'} key={day}>
                    {typeOfDay()}
                </div>
            )

        }

        return days
    }

    return (
        <div className="days">
            {renderDays()}
        </div>
    )
}