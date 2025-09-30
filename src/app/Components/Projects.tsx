"use client"

import React from "react"

export default function Projects() {
    const [toggleButton, setToggleButton] = React.useState('projects')

    const toggleView = (view: string) => {
        setToggleButton(view)
    }

    return (
        <div>

        </div>
    )
}