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
    SiAxios,
    SiFilezilla,
    SiNginx,
    SiGoogleauthenticator 
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
        title: "Finance Manager",
        description: "A financial platform that aims to record expenses and income from clients from Thailand (PROJECT MAY NOT BE PUBLISHED :))",
        image: "/assets/projects/financemanage.png",
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'Inertia', 'ShadCN', 'Axios', 'Nginx', 'FileZilla', 'Google Auth'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
            <FaReact key={'react'} size={20} />,
            <SiTypescript key={'typescript'} size={20} />,
            <SiTailwindcss key={'tailwind'} size={20} />,
            <FaLaravel key={'laravel'} size={20} />,
            <SiInertia key={'inertia'} size={20} />,
            <SiShadcnui key={'shadcn'} size={20} />,
            <SiAxios key={'axios'} size={20} />,
            <SiNginx key={'nginx'} size={20} />,
            <SiFilezilla key={'filezilla'} size={20} />,
            <SiGoogleauthenticator  key={'google-auth'} size={20} />,
        ]
    },
    {
        id: 3,
        title: "Finance Manager",
        description: "A financial platform that aims to record expenses and income from clients from Thailand (PROJECT MAY NOT BE PUBLISHED :))",
        image: "/assets/projects/financemanage.png",
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'Inertia', 'ShadCN', 'Axios', 'Nginx', 'FileZilla', 'Google Auth'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
            <FaReact key={'react'} size={20} />,
            <SiTypescript key={'typescript'} size={20} />,
            <SiTailwindcss key={'tailwind'} size={20} />,
            <FaLaravel key={'laravel'} size={20} />,
            <SiInertia key={'inertia'} size={20} />,
            <SiShadcnui key={'shadcn'} size={20} />,
            <SiAxios key={'axios'} size={20} />,
            <SiNginx key={'nginx'} size={20} />,
            <SiFilezilla key={'filezilla'} size={20} />,
            <SiGoogleauthenticator  key={'google-auth'} size={20} />,
        ]
    }
]