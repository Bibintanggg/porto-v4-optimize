import Image from "next/image";
import Card from "./Card";
import { FaCommentDots } from "react-icons/fa";

export default function ContactSection() {
    return (
        <div>
            <Card className="w-[500px] h-[500px]">
                <Card className="">
                <div className="flex items-center gap-4 p-4">
                    <FaCommentDots color="grey" size={40}/>
                    <p className="text-white text-xl">Comments</p>
                </div>
                <hr className="border rounded-full w-full border-white/20"/>

                <form action="">
                    
                </form>
                </Card>
            </Card>
        </div>
    )
}