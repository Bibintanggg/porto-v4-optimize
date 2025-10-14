"use client"

import { projectData } from "@/data/projects-data"
import React from "react"
import CardProject from "./CardProject"
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io"
import { motion } from "framer-motion"
import Image from "next/image"
import ExperienceData from "@/data/experience-data"

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
                        ? 'bg-white/40 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                >
                    Projects
                </button>
                <button
                    onClick={() => toggleView('experience')}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${toggleButton === 'experience'
                        ? 'bg-white/40 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                >
                    Experience
                </button>
            </div>

            {toggleButton == "projects" ? (
                <>
                    <div className="flex items-center justify-center mt-10">

                        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-10">
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
                    </div>

                    {projectData.length > 2 && (
                        <div className="flex justify-center mt-10 text-white">
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
                    <div className="flex items-center justify-center mt-10 flex-wrap">
                        {ExperienceData.map((items) => (
                            <div key={items.id} className="flex items-start gap-4">

                                <div className="flex-shrink-0">
                                    <Image src={items.image} alt={items.title} width={70} height={70} />
                                </div>

                                <div className="flex flex-col text-white text-base">
                                    <div className="mb-2">
                                        <p className="font-medium">{items.title}</p>
                                        <span className="text-sm">{items.time}</span>
                                    </div>

                                    <ol className="relative border-l border-white/20 ml-2 mt-4">
                                        <li className="mb-4 ml-4">
                                            <span className="absolute flex items-center justify-center w-4 h-4 bg-white/50 rounded-full -left-2 ring-4 ring-white/30 dark:ring-gray-900"></span>
                                            <h3 className="font-medium">{typeof items.subtitle === "string" ? items.subtitle : JSON.stringify(items.subtitle)}</h3>
                                            <p className="text-sm">{items.description}</p>
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        ))}
                    </div>
                </>
            )}


        </div>
    )
}