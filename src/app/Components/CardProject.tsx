import { CardProjectProps } from "@/types/project";
import Image from "next/image";
import { FiShare } from "react-icons/fi";
import AvatarIcon from "./AvatarIcon";

export default function CardProject({ project, children }: CardProjectProps) {
    return (
        <div className=" rounded-lg overflow-hidden shadow-lg bg-white/10
        backdrop-blur-md border border-white/10 hover:shadow-xl transition-all duration-300 
        h-[350px]">
            <div className="relative w-full h-[150px] overflow-hidden bg-white/5">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out 
                    hover:scale-105"
                    priority={false}
                />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 font-sans text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>

                <div className="flex justify-between items-center mt-auto">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans group flex items-center gap-2 bg-white/10 backdrop-blur-3xl 
                        text-white px-4 py-2 rounded-md text-sm font-medium transition-all 
                        hover:bg-white/20"
                    >
                        <span className="transition-all duration-200 group-hover:-ml-1">
                            Demo
                        </span>
                        <FiShare
                            className="transition-all duration-200 group-hover:rotate-90 group-hover:ml-3" />
                    </a>

                    {project.icon && (
                        <AvatarIcon
                            items={project.icon.map((icon, idx) => ({
                                id: idx,
                                avatar: icon,
                                label: project.techStack?.[idx]
                            }))}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}