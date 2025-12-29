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
            days.push(<td className="empty-day" key={`empty-${i}`}></td>)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const realDay = currentDate.getFullYear() === realDate.getFullYear() && currentDate.getMonth() === realDate.getMonth() && day === realDate.getDay()
            const typeOfDay = () => {
                const extraDays = Object.values(currentDate.extraDaysInYear())
                
                if (extraDays.some(d => d.month == month && d.day == day)) {
                    let symbol
                    let name
                    extraDays.forEach(d => {
                        if (d.month == month && d.day === day) {
                            name = d.name
                            symbol = d.short
                        }
                    })
                    extraCount+=1
                    return { symbol, name }
                } else {
                    return { symbol: (day - extraCount) }
                }
            }
            days.push(
                <td className={realDay ? ' real-day' : 'day'} key={day} aria-label={typeOfDay().name} >
                    {typeOfDay().symbol}
                </td>
            )

        }

        return days
    }

    return (
        <tr className="days">
            {renderDays()}
        </tr>
    )
}