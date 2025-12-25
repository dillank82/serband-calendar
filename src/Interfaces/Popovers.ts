import { FloatingContext } from "@floating-ui/react";
import { CSSProperties, ReactNode, Ref } from "react";

export interface PopoverWrapperProps {
    children: ReactNode
    isOpen: boolean
    floatingRef: Ref<HTMLDivElement>
    arrowRef: Ref<SVGSVGElement>
    floatingStyles: CSSProperties
    context: FloatingContext
    arrowStyles?: CSSProperties
}

export type PopoverMessageProps = {
    content: ReactNode
    title?: string
    className?: string
    ariaRole: 'alert' | 'status' | 'tooltip'
} & Omit<PopoverWrapperProps, 'children'>

export type PopoverErrorProps = (
    Omit<PopoverMessageProps, 'content' | 'ariaRole' | 'className' | 'children'> 
    & { message: string, id: string }
) 