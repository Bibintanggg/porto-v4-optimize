"use client"

import Image from "next/image";
import Card from "./Card";
import React from "react";
import { FaCss3, FaFolder, FaLaravel, FaPython, FaReact, FaUserNinja } from "react-icons/fa";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { BsTools } from "react-icons/bs";
import { BiArchive, BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiNextdotjs, SiTailwindcss, SiTensorflow } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { AiOutlineProject } from "react-icons/ai";
import { TechIcon, DetailAbout } from "./TechIcon";

export default function About() {
    const [showDetailedAbout, setShowDetailedAbout] = React.useState(false)
    const [isStack, setIsStack] = React.useState(false)

    const detailAbout = [
        { id: 1, icon: <FaReact size={30} />, className: "text-blue-500" },
        { id: 2, icon: <BiLogoTypescript size={30} />, className: "text-blue-500 " },
        { id: 3, icon: <SiTailwindcss size={30} />, className: "text-cyan-400" },
        { id: 4, icon: <FaCss3 size={30} />, className: "text-cyan-400" },
        { id: 5, icon: <FaLaravel size={30} />, className: "text-red-500" },
        { id: 6, icon: <span className="font-bold text-lg">+9</span>, name: "+9" }
    ]

    const WEB_DEV = [
        { id: 1, icon: <FaReact size={30} />, className: "text-blue-500" },
        { id: 2, icon: <BiLogoTypescript size={30} />, className: "text-blue-500 " },
        { id: 3, icon: <SiTailwindcss size={30} />, className: "text-cyan-400" },
        { id: 4, icon: <FaCss3 size={30} />, className: "text-cyan-400" },
        { id: 5, icon: <FaLaravel size={30} />, className: "text-red-500" },
        { id: 6, icon: <SiNextdotjs size={30} />, className: "" },
        { id: 7, icon: <DiJavascript size={30} />, className: "text-yellow-300" },
    ]

    const LEARNING = [
        { id: 1, icon: <FaGolang size={30} />, className: "text-blue-500" },
        { id: 2, icon: <SiTensorflow size={30} />, className: "text-yellow-500" },
        { id: 3, icon: <FaPython size={30} />, className: "text-yellow-500" },
    ]

    return (
        <div className="flex flex-col justify-center items-center text-white">
            <h1 className="font-mono text-3xl font-bold mb-4">ABOUT ME</h1>

            <div className="flex gap-2">
                <Card className="w-62 h-[408px] overflow-hidden rounded-md">
                    <div className="relative w-full h-full">
                        {/* <Image
                            src="/assets/bintangImg.jpeg"
                            alt="bintang img"
                            fill
                            sizes="100vw"
                            className="object-cover"
                        /> */}
                    </div>
                </Card>

                <div className="flex flex-col gap-2 font-mono">
                    <div className="flex gap-2">
                        {!showDetailedAbout && (
                            <Card className="w-96 h-[200px]">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                                        <FaUserNinja className="w-10 h-6 opacity-50" />
                                    </div>
                                    <h1>About Me</h1>
                                </div>

                                <div className="w-full">
                                    <p className="text-sm mt-2">
                                        Hello.. Im Bintang Yudha Putra Purnomo, im from Jakarta and currently
                                        studying at SMKN 46 Jakarta. Im a student with passionate ...
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div></div>
                                    <button
                                        onClick={() => setShowDetailedAbout(true)}
                                        className="flex items-center gap-1 hover:text-blue-400 transition-colors"
                                    >
                                        More Details
                                        <IoIosArrowForward className="text-sm" />
                                    </button>
                                </div>
                            </Card>
                        )}
                        <div>
                            <AnimatePresence>
                                {showDetailedAbout && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card className="w-[600px] h-[400px] p-6 relative">
                                            <button
                                                onClick={() => setShowDetailedAbout(false)}
                                                className="absolute top-4 right-4 p-1 hover:text-blue-400 transition-colors"
                                            >
                                                <IoIosClose size={24} />
                                            </button>

                                            <div className="flex items-center gap-6 mb-6">
                                                <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                                                    <FaUserNinja className="w-10 h-6 opacity-50" />
                                                </div>
                                                <h1 className="text-xl font-bold">About Me</h1>
                                            </div>

                                            <div className="text-sm space-y-4 overflow-y-auto h-[280px] pr-4 thin-scrollbar">
                                                <p>
                                                    Hello! I`m Bintang Yudha Putra Purnomo, a passionate technology enthusiast from Jakarta, Indonesia.
                                                    Currently, I`m pursuing my education at SMKN 46 Jakarta, where I`m developing my skills in software development.
                                                </p>

                                                <p>
                                                    My journey in technology began when I was first introduced to programming in school. Since then,
                                                    I`ve developed a strong passion for web development.
                                                </p>

                                                <h2 className="font-bold mt-4 text-blue-400">Hobbies & Interests</h2>
                                                <p>
                                                    When I`m not coding, I enjoy listening to music (check my favorites below!), playing games,
                                                    and keeping up with the latest tech trends. I`m particularly interested in how AI is shaping
                                                    our future and love exploring new technologies.
                                                </p>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                {!showDetailedAbout && (
                                    <Card className="w-[208px] h-[200px] p-4 flex flex-col gap-4 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl border border-gray-700">
                                                <BsTools className="w-5 h-5 opacity-70 text-gray-300" />
                                            </div>
                                            <h3 className="text-sm font-medium text-gray-200">STACK</h3>
                                        </div>

                                        <DetailAbout
                                        items={detailAbout}
                                        onShowStack={() => setIsStack(true)}
                                        />

                                    </Card>
                                )}
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isStack && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    className="bg-white/10 backdrop-blur-2xl rounded-xl p-6 border border-gray-700 gap-4 relative"
                                >
                                    <button
                                        onClick={() => setIsStack(false)}
                                        className="absolute top-3 right-3 text-white hover:text-red-400 transition-colors"
                                    >
                                        <IoIosClose size={28} />
                                    </button>

                                    <div className="flex flex-col">
                                        <h1>Stack</h1>
                                        <hr className="w-20 border border-white/20 " />
                                        <div className="flex items-center gap-2 mt-2">

                                            <div className="flex flex-col">
                                                <h1>Web Development</h1>
                                                <div className="grid grid-cols-7 items-center gap-4 mt-2">
                                                    {WEB_DEV.map((item) => (
                                                        <TechIcon key={item.id} item={item} size={24} onClick={() => {}}/>
                                                    ))}
                                                </div>

                                                <h1 className="mt-4">Database</h1>
                                                <div className="grid grid-cols-5 items-center gap-4 mt-2">
                                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5">
                                                        <SiMysql className=" w-8 h-8" />
                                                    </div>
                                                </div>

                                                <h1 className="mt-4">Currently Learning</h1>
                                                <div className="flex items-center gap-4 mt-2">
                                                    {LEARNING.map((item) => (
                                                        <TechIcon key={item.id} item={item} size={24} onClick={() => {}}/>
                                                    ))}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex gap-2">
                        <Card className="w-[240px] h-[200px]">
                            <div className="flex justify-end items-center gap-5 ">
                                <h1>Highlight</h1>
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                                    <AiOutlineProject className="w-10 h-6 opacity-50" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center justify-center h-full text-6xl font-bold gap-10">
                                    <h1>5+</h1>
                                    <h2>3+</h2>
                                </div>

                                <div className="text-sm gap-5 flex justify-center mt-5">
                                    <a href="" className="w-24 bg-white/10 justify-center flex rounded-xl h-5">Projects</a>
                                    <a href="" className="w-28 bg-white/10 justify-center flex rounded-xl h-5">Experience</a>
                                </div>
                            </div>
                        </Card>

                        <Card className="w-[350px] h-[200px] overflow-y-auto thin-scrollbar">
                            <div className="flex gap-2 items-center">
                                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full backdrop-blur-2xl">
                                    <BiArchive className="w-10 h-6 opacity-50" />
                                </div>
                                <h1>Archive</h1>
                            </div>
                            <div className="flex items-center gap-5 mt-5">
                                <a href="/music" className="flex flex-col items-center cursor-pointer">
                                    <FaFolder size={40} className="text-white/40" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm">fav-
                                            <span>music</span>
                                        </p>
                                    </div>
                                </a>

                                <a href="/gallery" className="flex flex-col items-center cursor-pointer">
                                    <FaFolder size={40} className="text-white/40" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm">gallery
                                        </p>
                                    </div>
                                </a>

                                <a href="#" className="flex flex-col items-center cursor-pointer">
                                    <FaFolder size={40} className="text-white/40" />
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm">bintang
                                        </p>
                                    </div>
                                </a>

                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    )
}