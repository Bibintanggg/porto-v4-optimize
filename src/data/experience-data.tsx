
interface Experience {
    id: number
    title: string
    time: string
    subtitle?: string | { [key: string]: any},
    image: string
    description?: string
}

export const ExperienceData: Experience[] = [
    {
        id: 1,
        title: "IndiTechnology",
        subtitle: "FullStack Web Developer",
        time: "July 2025 - Oct 2025",
        image: "/assets/images/inditech.png",
        description: "Front End, Back End, API", 
    },
    {
        id: 2,
        title: "SMKN 46 Jakarta",
        subtitle: {
            id: 1,
            title: "testes"
        },
        time: "July 2025 - Oct 2025",
        image: "/assets/images/forensix.png",
        description: "Front End, Back End, API", 
    },
]

export default ExperienceData