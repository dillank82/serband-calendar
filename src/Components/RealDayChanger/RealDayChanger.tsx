import { useDateContext } from "../../Context/useDateContext"
import { SerbandDate } from "../../SerbandDate"
import { InputForm } from "../InputForm/InputForm"

export const RealDayChanger = ({ closeChanger }: { closeChanger: () => void }) => {
    const { realDate, setRealDate } = useDateContext()
    const handleSubmit = (value: string) => {
        const daysCount = parseInt(value)
        const newDate = new SerbandDate (realDate.getFullYear(), realDate.getMonth(), realDate.getDay()+daysCount)
        setRealDate(newDate)
        closeChanger()
    }

    return (
        <div>
            <InputForm placeholderText="Как много дней прошло?" onSubmit={handleSubmit}/>
            <button onClick={closeChanger}>X</button>
        </div>
    )
}