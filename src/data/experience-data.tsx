
interface Experience {
    id: number
    title: string
    time: string
    subtitle?: string
    image: string
    description?: string
    experience?: {
        image: string
        title: string
        time: string
        description: string
    }
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
        experience: {
            image: "/assets/images/sagas.png",
            title: "Sagasitas Competition",
            time: "26 August - 30 August 2024",
            description: ""
        },
        time: "July 2025 - Oct 2025",
        image: "/assets/images/forensix.png",
        // description: "Front End, Back End, API", 
    },
]

export default ExperienceData