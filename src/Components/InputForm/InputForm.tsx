import { ChangeEvent, FormEvent, ReactNode, useState } from "react"
import './InputForm.css'

interface InputFormProps {
    placeholderText: string
    onSubmit: (inputValue: string) => void
    children?: ReactNode
    error?: string | null
}

export const InputForm = ({ placeholderText, onSubmit, children, error }: InputFormProps) => {
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
            <input
                type="text"
                onChange={handleChange}
                value={inputValue}
                placeholder={placeholderText}
                className={error ? 'error' : ''}
            />
            <div className="form-sub-group">
                {children}
                <button type="submit" className="submit">Подтвердить</button>
            </div>
        </form>
    )
}