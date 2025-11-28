import { ReactNode, useState } from "react";
import { SerbandDate } from "../SerbandDate";
import { DateContext } from "./dateStore";

export const DateContextProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [currentDate, setDate] = useState(new SerbandDate())
    return (
        <DateContext.Provider value={{ currentDate, setDate }}>
            {children}
        </DateContext.Provider>
    )
}