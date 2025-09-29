"use client"

import React from "react"
import { motion } from "framer-motion"

export default function SocialIcon({
    icon,
    colors,
}: {
    icon: React.ReactNode
    colors: string[]
}) {
    return (
        <motion.div
            className="relative p-0.5 cursor-pointer w-7 h-7 flex justify-center items-center "
            whileHover="hover"
            initial="initial"
        >
            <motion.div
                className="absolute inset-0 rounded-md backdrop-blur-md bg-white/30"
                variants={{
                    initial: { opacity: 0 },
                    hover: {
                        opacity: 1,
                        transition: { duration: 0.2 },
                    },
                }}
            />

            <motion.div
                className="absolute inset-0 rounded-md"
                variants={{
                    initial: {
                        opacity: 0,
                        background: "transparent",
                    },
                    hover: {
                        opacity: 1,
                        background: `linear-gradient(45deg, ${colors.join(", ")})`,
                        transition: {
                            delay: 0.2,
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    },
                }}
            />

            <motion.div
                className="relative z-10"
                variants={{
                    hover: {
                        scale: 1.1,
                        transition: { duration: 0.3 },
                    },
                }}
            >
                {icon}
            </motion.div>
        </motion.div>
    )
}