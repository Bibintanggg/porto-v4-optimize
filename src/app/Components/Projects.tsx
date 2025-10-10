"use client"

import { projectData } from "@/data/projects-data"
import React from "react"
import CardProject from "./CardProject" 

export default function Projects() {
    const [toggleButton, setToggleButton] = React.useState('projects')
    const [visibleProject, setVisibleProjects] = React.useState(2)

    const toggleView = (view: string) => {
        setToggleButton(view)
    }

    const loadMore = () => {
        setVisibleProjects(prev => prev + 2)
    }

    const showLess = () => {
        setVisibleProjects(2)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center mb-8 gap-4">
                <button
                    onClick={() => toggleView('projects')}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                        toggleButton === 'projects' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                >
                    Projects
                </button>
                <button
                    onClick={() => toggleView('experience')}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                        toggleButton === 'experience' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                >
                    Experience
                </button>
            </div>

            <div className="grid grid-cols-2">
                {projectData.slice(0, visibleProject).map((project, idx) => (
                    <CardProject 
                        key={project.id || idx} 
                        project={project}
                    >
                    </CardProject>
                ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
                {visibleProject < projectData.length && (
                    <button
                        onClick={loadMore}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Load More
                    </button>
                )}
                {visibleProject > 2 && (
                    <button
                        onClick={showLess}
                        className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    )
}