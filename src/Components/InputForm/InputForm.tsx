import { ChangeEvent, FormEvent, useState } from "react"

interface InputFormProps {
    placeholderText: string
    onSubmit: (inputValue: string) => void
}

export const InputForm = ({ placeholderText, onSubmit }: InputFormProps) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const input = event.currentTarget
        const value = (input as HTMLInputElement).value
        setInputValue(value)
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit(inputValue)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleChange}
                value={inputValue}
                placeholder={placeholderText}
            />
            <button type="submit">Подтвердить</button>
        </form>
    )
}