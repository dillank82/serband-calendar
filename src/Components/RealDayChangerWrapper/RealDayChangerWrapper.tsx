import { useState } from "react"
import { RealDayChanger } from "../RealDayChanger/RealDayChanger"
import { ChangeDaysButton } from "../ChangeDaysButton/ChangeDaysButton"

export const RealDayChangerWrapper = () => {
    const [isChangerOpen, setIsChangerOpen] = useState(false)
    const openChanger = () => setIsChangerOpen(true)
    const closeChanger = () => setIsChangerOpen(false)

    return (
        <>
            <div style={{ display: isChangerOpen ? "block" : 'none' }}>
                <RealDayChanger closeChanger={closeChanger} isChangerOpen={isChangerOpen} />
            </div>
            <div style={{ display: isChangerOpen ? "none" : 'block' }}>
                <ChangeDaysButton openChanger={openChanger} />
            </div>
        </>
    )
}