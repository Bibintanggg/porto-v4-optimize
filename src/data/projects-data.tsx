import { ProjectProps } from "@/types/project";
import { FaLaravel, FaReact } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5";
import {
    SiTailwindcss,
    SiThreedotjs,
    SiTypescript,
    SiBlender,
    SiVite,
    SiMui,
    SiInertia,
    SiShadcnui,
    SiSwagger,
    SiAxios
} from "react-icons/si"

export const projectData: ProjectProps[] = [
    {
        id: 1,
        title: "SleepWell",
        description: "An educational platform that aims to raise awareness of the importance of healthy sleep...",
        image: "/assets/projects/sleepwell.png",
        techStack: ['React', 'TailwindCSS', 'ThreeJS', 'Blender', 'Firebase'],
        link: "https://sleepwellfortsix.vercel.app/",
        github: '',
        icon: [
            <FaReact key='react' size={20} />,
            <SiTailwindcss key='tailwind' size={20} />,
            <SiThreedotjs key='threejs' size={20} />,
            <SiBlender key={'blender'} size={20} />,
            <IoLogoFirebase key={'firebase'} size={20} />
        ]
    },
    {
        id: 2,
        title: "SleepWell",
        description: "An educational platform that aims to raise awareness of the importance of healthy sleep...",
        image: "/assets/projects/sleepwell.png",
        techStack: ['React', 'TailwindCSS', 'ThreeJS', 'Blender', 'Firebase'],
        link: "https://sleepwellfortsix.vercel.app/",
        github: '',
        icon: [
            <FaReact key='react' size={20} />,
            <SiTailwindcss key='tailwind' size={20} />,
            <SiThreedotjs key='threejs' size={20} />,
            <SiBlender key={'blender'} size={20} />,
            <IoLogoFirebase key={'firebase'} size={20} />
        ]
    }
]