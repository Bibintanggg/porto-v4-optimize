import React from "react"

export type TechIconProps = {
    item: {
        id: number
        icon: React.ReactNode
        className?: string
        name?: string
    }
    onClick?: () => void
    size?: number
}