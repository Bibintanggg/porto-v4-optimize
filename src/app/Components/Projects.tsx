"use client"

import { projectData } from "@/data/projects-data"
import React from "react"
import CardProject from "./CardProject"
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io"
import { motion } from "framer-motion"

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
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${toggleButton === 'projects'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                >
                    Projects
                </button>
                <button
                    onClick={() => toggleView('experience')}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${toggleButton === 'experience'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                >
                    Experience
                </button>
            </div>

            {toggleButton == "projects" ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {projectData.slice(0, visibleProject).map((project, idx) => (
                            <CardProject
                                key={project.id || idx}
                                project={project}
                            >
                                <div>

                                </div>
                            </CardProject>
                        ))}
                    </div>

                    {projectData.length > 2 && (
                        <div className="flex justify-center mt-10">
                            {visibleProject < projectData.length ? (
                                <motion.button
                                    onClick={loadMore}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Show More
                                    <IoIosArrowForward />
                                </motion.button>
                            ) : (
                                <motion.button
                                    onClick={showLess}
                                    className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Show Less
                                    <IoIosArrowUp />
                                </motion.button>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="flex items-center justify-center mt-10">
                        <span className="text-gray-400">Experience content coming soon.</span>
                    </div>
                </>
            )}


        </div>
    )
}