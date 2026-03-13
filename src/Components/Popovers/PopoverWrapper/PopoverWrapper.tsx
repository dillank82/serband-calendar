import { FloatingArrow } from "@floating-ui/react"
import { PopoverWrapperProps } from "../../../Interfaces/Popovers"

export const PopoverWrapper = ({
    children,
    isOpen,
    floatingRef,
    arrowRef,
    floatingStyles,
    context,
    arrowStyles
}: PopoverWrapperProps) => {
    return (
        <>
            {isOpen && (
                <div
                    className="popover-wrapper"
                    ref={floatingRef}
                    style={floatingStyles}
                >
                    {children}
                    <FloatingArrow ref={arrowRef} context={context} style={arrowStyles}/>
                </div>
            )}
        </>
    )
}