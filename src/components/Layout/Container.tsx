import clsx from 'clsx'
import type { FC, HTMLProps, ReactNode } from 'react'

interface ContainerProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode
}
const Container: FC<ContainerProps> = ({ children, className, ...rest }) => {
    return (
        <div className={clsx(className, 'container px-4 sm:px-8 mx-auto')} {...rest}>
            {children}
        </div>
    )
}

export default Container
