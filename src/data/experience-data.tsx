
interface Experience {
    id: number
    title: string
    time: string
    subtitle?: string
    image: string
    description?: string
    experiences?: ExperienceDetail[]
}

interface ExperienceDetail {
    id: number
    image: string
    title: string
    time: string
    description?: string
    certificate: string
    subtitle: string
}

export const ExperienceData: Experience[] = [
    {
        id: 1,
        title: "IndiTechnology",
        subtitle: "FullStack Web Developer Intern",
        time: "July 2025 - Oct 2025",
        image: "/assets/images/inditech.png",
        description: "Developing modern web applications using cutting-edge technologies",
    },
    {
        id: 2,
        title: "SMKN 46 Jakarta",
        experiences: [
            {
                id: 1,
                image: "/assets/images/sagas.png",
                title: "Sagasitas Competition",
                time: "26 August - 30 August 2024",
                subtitle: "Front End Developer, UI/UX Designer",
                description: "Take part in competitions related to health websites",
                certificate: "/assets/certificates/sagasitas.png"
            },
            {
                id: 2,
                image: "/assets/images/tragora.png",
                title: "Trelogy (Tradevis Education Technology Competition)",
                time: "1 October - 14 October 2024",
                subtitle: "Front End Developer, UI/UX Designer",
                description: "Take part in competitions related to health websites",
                certificate: "/assets/certificates/trelogy.png"
            }
        ],
        time: "July 2023 - Oct 2025",
        image: "/assets/images/forensix.png",
        // description: "Front End, Back End, API", 
    },
]
