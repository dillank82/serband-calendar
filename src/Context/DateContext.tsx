import { createContext, ReactNode, useContext, useState } from "react";
import { SerbandDate } from "../SerbandDate";
import { IDateContext } from "../Interfaces/IDateContext";

const DateContext = createContext<IDateContext | undefined>(undefined)

const DateContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [currentDate, setDate] = useState(new SerbandDate())
    return (
        <DateContext.Provider value={{ currentDate, setDate }}>
            {children}
        </DateContext.Provider>
    )
}

const useDateContext = () => {
    const context = useContext(DateContext)
    if (!context){
        throw new Error('useDateContext must be used within a DateContextProvider')    
    }
    return context
}

export {DateContextProvider, useDateContext}
