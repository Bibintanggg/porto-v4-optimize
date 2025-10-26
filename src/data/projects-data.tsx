import { ProjectProps } from "@/types/project";
import { DiJavascript } from "react-icons/di";
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
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Laravel', 'Inertia', 'ShadCN', 'Axios', 'Nginx'],
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
        ]
    },
    {
        id: 3,
        title: "Talent Force",
        description: "An employee management web app that provides features for logbook tracking, permit requests, and work monitoring.",
        image: "/assets/projects/talent-force.png",
        techStack: ['React', 'TailwindCSS', 'Typescript', 'Laravel Inertia', 'Laravel', 'ShadCN', 'Swagger'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
            <FaReact key={'react'} size={20} />,
            <SiTailwindcss key={'tailwind'} size={20} />,
            <SiTypescript key={'typescript'} size={20} />,
            <SiInertia key={'inertia'} size={20} />,
            <FaLaravel key={'laravel'} size={20} />,
            <SiShadcnui key={'shadcn'} size={20} />,
            <SiSwagger key={'swagger'} size={20}/>
        ]
    },
    {
        id: 4,
        title: "Lecturer Quiz App",
        description: "An employee management web app that provides features for logbook tracking, permit requests, and work monitoring.",
        image: "/assets/projects/ucic.png",
        techStack: ['TailwindCSS', 'JavaScript', 'Laravel'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
            <SiTailwindcss key={'tailwind'} size={20} />,
            <DiJavascript key={'javascript'} size={20} />,
            <FaLaravel key={'laravel'} size={20} />,
        ]
    },
    {
        id: 5,
        title: "Jejak Pemuda",
        description: "An employee management web app that provides features for logbook tracking, permit requests, and work monitoring.",
        image: "/assets/projects/jejakpemuda.png",
        techStack: ['TailwindCSS', 'React', 'Blender', 'ThreeJS'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
            <SiTailwindcss key={'tailwind'} size={20} />,
            <FaReact key={'react'} size={20} />,
            <SiBlender key={'blender'} size={20} />,
            <SiThreedotjs key={'threejs'} size={20} />,
        ]
    },
    {
        id: 6,
        title: "Kanban",
        description: "An employee management web app that provides features for logbook tracking, permit requests, and work monitoring.",
        image: "/assets/projects/kanban.png",
        techStack: ['React', 'TailwinCSS', 'TypeScript', 'Laravel Inertia', 'Laravel', 'ShadCN'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
             <FaReact key={'react'} size={20} />,
            <SiTailwindcss key={'tailwind'} size={20} />,
            <SiTypescript key={'typescript'} size={20} />,
            <SiInertia key={'inertia'} size={20} />,
            <FaLaravel key={'laravel'} size={20} />,
            <SiShadcnui key={'shadcn'} size={20} />,
        ]
    },
    {
        id: 7,
        title: "Mini Finance Apps",
        description: "An employee management web app that provides features for logbook tracking, permit requests, and work monitoring.",
        image: "/assets/projects/finance.png",
        techStack: ['TailwindCSS', 'JavaScript', 'Laravel'],
        link: "https://github.com/Bibintanggg",
        github: 'https://github.com/Bibintanggg',
        icon: [
            <SiTailwindcss key={'tailwind'} size={20} />,
            <DiJavascript key={'javascript'} size={20} />,
            <FaLaravel key={'laravel'} size={20} />,
        ]
    },
]