import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardProps = {
    title?: string;
    children: ReactNode;
    className?: string;
    // shiny?: boolean;
};

export default function Card({ title, children, className }: CardProps) {
    const baseClasses = `bg-white/10 rounded-xl p-4 shadow-lg backdrop-blur-md transition-transform duration-200 ${className}`;

        return (
            <motion.div
                className={`relative overflow-hidden ${baseClasses}`}
                initial={{ background: "linear-gradient(45deg, #27272a, #3f3f46)" }}
                whileHover={{
                    background: [
                        "linear-gradient(45deg, #27272a, #3f3f46)",
                    ],
                    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                }}
            >
                <motion.div
                    className="absolute inset-0 opacity-0"
                    whileHover={{
                        opacity: 0.3,
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        transition: { duration: 0.6 },
                    }}
                />

                <div className="relative z-10">
                    {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
                    {children}
                </div>
            </motion.div>
        );

        return (
            <div className={baseClasses}>
                {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
                {children}
            </div>
        );
    }

