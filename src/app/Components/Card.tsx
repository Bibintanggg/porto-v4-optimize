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
            >
                <motion.div
                    className="absolute inset-0 opacity-0"
                />

                <div className="relative z-10">
                    {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
                    {children}
                </div>
            </motion.div>
        );
    }

