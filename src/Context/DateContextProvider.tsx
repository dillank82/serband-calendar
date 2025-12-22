import { ReactNode, useState } from "react";
import { SerbandDate } from "../SerbandDate";
import { DateContext } from "./dateStore";

export const DateContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [realDate, setRealDate] = useState(new SerbandDate(1601, 1, 24))
    const [currentDate, setDate] = useState(realDate)
    return (
        <DateContext.Provider value={{ currentDate, setDate, realDate, setRealDate}}>
            {children}
        </DateContext.Provider>
    )
}