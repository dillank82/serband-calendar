import { ReactNode, useState } from "react";
import { DateContext } from "./dateStore";
import defaultDate from '../data/realDate'

export const DateContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [realDate, setRealDate] = useState(defaultDate)
    const [currentDate, setDate] = useState(realDate)
    return (
        <DateContext.Provider value={{ currentDate, setDate, realDate, setRealDate}}>
            {children}
        </DateContext.Provider>
    )
}