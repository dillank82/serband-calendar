import { useEffect, useRef, useState } from "react"
import { useDateContext } from "../../Context/useDateContext"
import { SerbandDate } from "../../SerbandDate"
import { InputForm } from "../InputForm/InputForm"
import './RealDayChanger.css'

interface RealDayChangerProps {
    closeChanger: () => void
    isChangerOpen: boolean
}

export const RealDayChanger = ({ closeChanger, isChangerOpen }: RealDayChangerProps) => {
    useEffect(() => {
        if (isChangerOpen && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isChangerOpen])

    const inputRef = useRef<HTMLInputElement | null>(null)
    const { realDate, setRealDate, setDate } = useDateContext()
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = (value: string) => {
        const daysCount = parseInt(value)
        setError(null)
        console.log(value)
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
            <InputForm onSubmit={handleSubmit} error={error} id="day-changer" labelText="Сколько дней прошло?" autoFocus={true} ref={inputRef}>
                <button type="button" onClick={closeChanger}>Отмена</button>
            </InputForm>
        </div>
    )
}