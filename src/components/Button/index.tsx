import clsx from 'clsx'
import Link from 'next/link'

import type { FC, ReactNode } from 'react'

type Variants = 'primary' | 'secondary' | 'white' | 'outline' | 'gray' | 'none'
type Sizes = 'xs' | 'sm' | 'md' | 'lg'
type ExtraSizes = 'xl' | '2xl' | '3xl' | 'full'

interface DefaultButtonProps {
    text?: string | ReactNode
    variant?: Variants
    url?: string
    size?: Sizes
    rounded?: Sizes | ExtraSizes
    shadow?: Sizes
    external?: boolean
    className?: string
    type?: 'button' | 'submit'
    loading?: boolean
    disabled?: boolean
    onClick?: () => void
    children?: ReactNode
}

export const Loading: FC = () => (
    <svg className="w-6 h-6 text-current animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
)

const Button: FC<DefaultButtonProps> = ({
    text,
    variant = 'primary',
    url,
    size = 'md',
    rounded = 'full',
    shadow,
    external,
    className,
    type = 'button',
    loading,
    children,
    onClick,
    ...rest
}) => {
    const content = children || text
    const classNames = [`rounded-${rounded}`]
    switch (variant) {
        case 'primary':
            classNames.push('text-white bg-primary')
            break
        case 'secondary':
            classNames.push('text-white bg-secondary')
            break
        case 'outline':
            classNames.push('text-primary border-primary border')
            break
        case 'gray':
            classNames.push('text-white border-gray-300 bg-gray-300')
            break
        case 'white':
            classNames.push('text-gray-700 bg-white border border-gray-300')
            break
        case 'none':
            classNames.push('bg-none border-none')
            break
        default:
            classNames.push('bg-white text-primary')
            break
    }

    switch (size) {
        case 'xs':
            classNames.push('px-3 text-sm py-[2px]')
            break
        case 'sm':
            classNames.push('px-4 py-2 text-sm')
            break
        case 'md':
            classNames.push('px-5 py-3')
            break
        case 'lg':
            classNames.push('py-3 px-9')
            break
        default:
            classNames.push('px-5 py-3')
            break
    }

    if (shadow) {
        classNames.push(`shadow-${shadow}`)
    }

    if (external) {
        return (
            <a href={url} target="_blank">
                <button type={type} className={clsx(...classNames, className, 'text-center flex justify-center')} {...rest}>
                    {loading ? (
                        <div className="flex items-center space-x-2">
                            <Loading />
                            <span>{content}</span>
                        </div>
                    ) : (
                        content
                    )}
                </button>
            </a>
        )
    }
    // if button had a link
    if (url) {
        return (
            <Link href={url} className={clsx(...classNames, className, 'text-center flex justify-center')} {...rest}>
                {loading ? (
                    <div className="flex items-center space-x-2">
                        <Loading />
                        <span>{content}</span>
                    </div>
                ) : (
                    content
                )}
            </Link>
        )
    }
    // if not, then render plain button
    return (
        <button
            type={type}
            className={clsx(...classNames, className, 'text-center flex justify-center')}
            {...rest}
            onClick={onClick}>
            {loading ? (
                <div className="flex items-center space-x-2">
                    <Loading />
                    <span>{content}</span>
                </div>
            ) : (
                content
            )}
        </button>
    )
}

export default Button
