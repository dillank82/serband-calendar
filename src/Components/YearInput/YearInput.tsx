import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { SerbandDate } from "../../SerbandDate"
import './YearInput.css'
import { useDateContext } from "../../Context/useDateContext"
import { PopoverError } from "../Popovers/PopoverError/PopoverError"
import { arrow, autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react"

export const YearInput = () => {

    const {currentDate, setDate} = useDateContext()

    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState(currentDate.getFullYear())
    const [error, setError] = useState('')
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    const arrowRef = useRef<SVGSVGElement | null>(null)

    const { context, floatingStyles, refs } = useFloating({
        open: isPopoverOpen,
        onOpenChange: setIsPopoverOpen,
        placement: 'top',
        strategy: 'absolute',
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(10),
            flip(),
            shift(),
            arrow({
                element: arrowRef
            })
        ]
    })

    const handleEdit = () => {
        setIsEditing(true)
        setInputValue(currentDate.getFullYear())
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setInputValue(parseInt(value))

        if (value) {
            if (value.length > 4) {
                setError('Максимально допустимая длина года - 4 символа')
                setIsPopoverOpen(true)
            }
            else {
                setIsPopoverOpen(false)
            }
        }
    }
    const handleBlur = (event: FormEvent<HTMLInputElement | HTMLFormElement>) => {
        event.preventDefault()
        setIsEditing(false)
        if (inputValue) {
            setDate(new SerbandDate(inputValue, currentDate.getMonth(), currentDate.getDay()))
        } else {
            setDate(currentDate)
        }
    }

    const errorId = 'year-input-error-message'

    return(
        <>
            <PopoverError
                message={error}
                isOpen={isPopoverOpen}
                floatingRef={refs.setFloating}
                arrowRef={arrowRef}
                context={context}
                floatingStyles={floatingStyles}
                id={errorId}
            />
            {isEditing ? (
                <form
                    className="label switcher-current-year"
                    onSubmit={(event) => handleBlur(event)}
                    ref={refs.setReference}
                >   
                    <label htmlFor="year-input" className="visually-hidden">Введите год</label>
                    <input
                        id="year-input"
                        type="number"
                        value={inputValue}
                        onChange={(event)=>{handleChange(event)}}
                        onBlur={(event) => handleBlur(event)}
                        autoFocus
                        maxLength={4}
                        aria-describedby={errorId}
                    />
                </form>
            ) : (
                <div 
                    className='label switcher-current-year'
                    tabIndex={0} onClick={handleEdit}
                    ref={refs.setReference}
                >
                    {currentDate.getFullYear()}
                </div>
            )}
        </>
    )
}