"use client"

import { projectData } from "@/data/projects-data"
import React, { useState } from "react"
import CardProject from "./CardProject"
import { IoIosArrowForward, IoIosArrowUp, IoIosDownload } from "react-icons/io"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExperienceData } from "@/data/experience-data"
import { useRouter } from "next/navigation"
import Transitions from "./Transitions"

export default function Projects({ id }: { id: string }) {
    const [toggleButton, setToggleButton] = React.useState('projects')
    const [visibleProject, setVisibleProjects] = React.useState(2)
    const [fileName, setFileName] = React.useState("")
    const router = useRouter()

    const toggleView = (view: string) => {
        setToggleButton(view)
    }

    const loadMore = () => {
        setVisibleProjects(prev => prev + 2)
    }

    const showLess = () => {
        setVisibleProjects(2)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name)
        }
    }

    const handleViewCertificate = (imagePath: string) => {
        const encodePath = encodeURIComponent(imagePath)
        router.push(`/certificate/${encodePath}`)
    }

    return (
        <div className="container mx-auto px-4 py-8" id="showcase">
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
                    <Transitions>
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
                    </Transitions>

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
                    <Transitions>
                        <div className="flex items-center justify-center mt-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-4xl">
                                {ExperienceData.map((items) => (
                                    <div key={items.id} className="flex items-start gap-4">

                                        <div className="flex-shrink-0">
                                            <Image src={items.image} alt={items.title} width={70} height={70} />
                                        </div>

                                        <div className="flex flex-col text-white text-base flex-1">
                                            <div className="mb-2">
                                                <p className="font-medium">{items.title}</p>
                                                <span className="text-sm">{items.time}</span>
                                            </div>

                                            <ol className="relative border-l border-white/20 ml-2 mt-4">
                                                <li className="mb-4 ml-4">
                                                    <span className="absolute flex items-center justify-center w-4 h-4 bg-white/50 rounded-full -left-2 ring-4 ring-white/30"></span>
                                                    <div className="ml-4">
                                                        <h3 className="font-medium">{items.subtitle}</h3>
                                                        <p className="text-sm mt-2">{items.description}</p>
                                                    </div>
                                                </li>

                                                {items.experiences && items.experiences.map((exp, index) => (
                                                    <li key={exp.id} className="mb-6 ml-4">
                                                        <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-400 rounded-full -left-2 ring-4 ring-blue-400/30">
                                                            <span className="text-xs text-white font-bold">
                                                                {index + 1}
                                                            </span>
                                                        </span>
                                                        <div className="ml-4">
                                                            <div className="flex flex-col gap-4 mt-3 p-4">
                                                                <div className="flex items-center gap-4">
                                                                    <Image src={exp.image} width={50} height={50} alt={exp.title} className="rounded-full" />
                                                                    <div className="flex flex-col">
                                                                        <p className="text-sm text-gray-300 font-medium">{exp.title}</p>
                                                                        <p className="text-sm text-gray-300">{exp.time}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col">
                                                                    <p className="text-sm text-gray-300">{exp.subtitle}</p>
                                                                    <p className="text-sm text-gray-300 line-clamp-3 mt-1">{exp.description}</p>
                                                                </div>
                                                                <a
                                                                    href={`/certificate/${encodeURIComponent(exp.certificate)}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="border border-blue-400 rounded-lg cursor-pointer hover:bg-blue-400/10 transition-colors"
                                                                >
                                                                    <div className="flex gap-4 p-2">
                                                                        <Image
                                                                            src={exp.certificate}
                                                                            width={50}
                                                                            height={50}
                                                                            alt={exp.title}
                                                                            className="rounded-lg"
                                                                        />
                                                                        <div className="flex flex-col text-sm items-start">
                                                                            <p>{exp.certificate.split("/").pop()}</p>
                                                                            <p className="text-xs text-blue-400">Click For Certificate</p>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </Transitions>

                </>
            )}
        </div>
    )
}