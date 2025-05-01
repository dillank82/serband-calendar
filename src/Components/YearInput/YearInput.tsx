import { useState } from "react"
import { useDateContext } from "../../Context/DateContext"
import { SerbandDate } from "../../SerbandDate"
import './YearInput.css'

export const YearInput = () => {

    const {currentDate, setDate} = useDateContext()

    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(currentDate.getFullYear())

    const handleEdit = () => {
        setIsEditing(true)
        setInputValue(currentDate.getFullYear())
    }
    const handleBlur = () => {
        setIsEditing(false)
        if (inputValue) {
            setDate(new SerbandDate(inputValue, currentDate.getMonth(), currentDate.getDay()))
        } else {
            setDate(currentDate)
        }
    }

    return(
        <div>
            {isEditing ? (
                <input 
                    type="number"
                    value={inputValue}
                    onChange={(e)=>{setInputValue(parseInt(e.target.value))}}
                    onBlur={handleBlur}
                    autoFocus
                    className='label switcher-current-year'
                />
            ) : (
                <div 
                    className='label switcher-current-year'
                    tabIndex={0} onClick={handleEdit}>
                    {currentDate.getFullYear()}
                </div>
            )
    
        }
        </div>
    )
}