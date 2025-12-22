import { useState } from "react"
import { RealDayChanger } from "../RealDayChanger/RealDayChanger"
import { ChangeDaysButton } from "../ChangeDaysButton/ChangeDaysButton"

export const RealDayChangerWrapper = () => {
    const [isChangerOpen, setIsChangerOpen] = useState(false)
    const openChanger = () => setIsChangerOpen(true)
    const closeChanger = () => setIsChangerOpen(false)

    return (
        <>
            {isChangerOpen
                ? <RealDayChanger closeChanger={closeChanger} /> 
                : <ChangeDaysButton openChanger={openChanger} />
            }
        </>
    )
}