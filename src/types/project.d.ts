import React from "react"

export type ProjectProps = {
    id: number
    title: string
    description: string
    techStack: string[]
    link?: string
    github?: string
    image: string
    icon?: React.ReactNode[]
}

export type CardProjectProps = {
    project: ProjectProps
    children?: React.ReactNode
}