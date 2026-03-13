import { PopoverMessageProps } from "../../../Interfaces/Popovers";
import { PopoverWrapper } from "../PopoverWrapper/PopoverWrapper";
import './PopoverMessage.css'

export const PopoverMessage = ({
    content,
    title,
    className,
    ariaRole,
    isOpen,
    floatingRef,
    arrowRef,
    floatingStyles,
    context,
    arrowStyles = {
        fill: '#ffffffef'
    }
}: PopoverMessageProps) => {
    return (
        <PopoverWrapper 
            isOpen={isOpen}
            floatingRef={floatingRef}
            arrowRef={arrowRef}
            floatingStyles={floatingStyles}
            context={context}
            arrowStyles={arrowStyles}
        >
            <div
                className={`popover-container ${className || ''}`}
                role={ariaRole}
            >
                {title && <p className="popover-title">{title}</p>}
                {content}
            </div>
        </PopoverWrapper>
    )
}