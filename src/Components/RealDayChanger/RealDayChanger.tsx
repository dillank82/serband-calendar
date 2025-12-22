import { useState } from "react"
import { useDateContext } from "../../Context/useDateContext"
import { SerbandDate } from "../../SerbandDate"
import { InputForm } from "../InputForm/InputForm"
import './RealDayChanger.css'

export const RealDayChanger = ({ closeChanger }: { closeChanger: () => void }) => {
    const { realDate, setRealDate, setDate } = useDateContext()
    const [error, setError] = useState<string | null>(null)
    const placeholderText = error ? error : "Как много дней прошло?"
    const handleSubmit = (value: string) => {
        const daysCount = parseInt(value)
        setError(null)
        if (isNaN(daysCount)) {
            setError('Пожалуйста, введите число')
        } else if (daysCount < 0) {
            setError('К сожалению время не может идти назад')
        } else if (daysCount === 0) {
            setError('Ничего не изменится, если пройдёт 0 дней')
        } else {
            const newDate = new SerbandDate (realDate.getFullYear(), realDate.getMonth(), realDate.getDay()+daysCount)
            setRealDate(newDate)
            localStorage.setItem('realDate', JSON.stringify(newDate))
            setDate(newDate)
            closeChanger()
        }

    }

    return (
        <div className="real-day-changer-container">
            <InputForm placeholderText={placeholderText} onSubmit={handleSubmit} error={error}>
                <button onClick={closeChanger}>Отмена</button>
            </InputForm>
        </div>
    )
}