import { PopoverErrorProps } from "../../../Interfaces/Popovers"
import { PopoverMessage } from "../PopoverMessage/PopoverMessage"
import './PopoverError.css'

export const PopoverError = ({
    message,
    title,
    isOpen,
    floatingRef,
    arrowRef,
    floatingStyles,
    context,
    arrowStyles
}: PopoverErrorProps) => {
    return (
        <PopoverMessage 
            content={<p>{message}</p>}
            title={title}
            className="error"
            ariaRole="alert"
            isOpen={isOpen}
            floatingRef={floatingRef}
            arrowRef={arrowRef}
            floatingStyles={floatingStyles}
            context={context}
            arrowStyles={arrowStyles}
        />
    )
}