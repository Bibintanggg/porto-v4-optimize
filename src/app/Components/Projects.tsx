"use client"

import { projectData } from "@/data/projects-data"
import React from "react"

export default function Projects() {
    const [toggleButton, setToggleButton] = React.useState('projects')

    const toggleView = (view: string) => {
        setToggleButton(view)
    }

    return (
        <div>
            {projectData.map((items) => (
                <div key={items.id}>
                    
                </div>
            ))}
        </div>
    )
}