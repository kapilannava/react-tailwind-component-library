import React from 'react'

const sizes = {
    default: `py-4 px-4`,
    lg: `py-6 px-6`,
    xl: `py-8 px-8 text-xl`,
}

const textColors = {
    default: `text-white`,
    blue: `text-blue-500`,
    red: `text-red-500`,
    green: `text-green-500`,
}

const bgColors = {
    default: `bg-transparent`,
    blue: `bg-blue-500`,
    red: `bg-red-500`,
    green: `bg-green-500`,
}

const bgHoverColor = {
    default: `bg-red-700`,
}

const Button = ({children, size, textColor, bgColor, bgHover, className = ""}) => {
    return (

        <button className={`
        ${sizes[size] || sizes.default}
        ${textColors[textColor] || textColors.default}
        ${bgColors[bgColor] || bgColors.default}
        hover:${bgHoverColor[bgHover] || bgHoverColor.default}
        ${className}
        `}>
        {children}
        </button>

    )
}

export default Button