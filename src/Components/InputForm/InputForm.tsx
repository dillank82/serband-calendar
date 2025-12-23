import { ChangeEvent, FormEvent, ReactNode, Ref, useState } from "react"
import './InputForm.css'

interface InputFormProps {
    placeholderText?: string
    onSubmit: (inputValue: string) => void
    children?: ReactNode
    error?: string | null
    id: string
    labelText: string
    autoFocus?: boolean
    ref?: Ref<HTMLInputElement | null>
}

export const InputForm = ({ placeholderText, onSubmit, children, error, id, labelText, autoFocus, ref }: InputFormProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget
        const value = (input as HTMLInputElement).value
        setInputValue(value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setInputValue('')
        onSubmit(inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type="text"
                onChange={handleChange}
                value={inputValue}
                placeholder={placeholderText}
                autoFocus={autoFocus || false}
                ref={ref}
                aria-describedby={`${id}-alert`}
            />
            <p role="alert" id={`${id}-alert`} className="input-error-message">{error}</p>
            <div className="form-sub-group">
                {children}
                <button type="submit" className="submit">Подтвердить</button>
            </div>
        </form>
    )
}