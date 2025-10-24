import Card from "./Card";
import ContactSection from "./ChatSection";

export default function Contact({ id }: {id: string}) {
    return (
        <div id="contact" className="flex gap-10 items-center justify-center">
            <Card className="w-[500px] h-[500px]">
                <div>

                </div>
            </Card>
            <ContactSection/>
        </div>
    )
}