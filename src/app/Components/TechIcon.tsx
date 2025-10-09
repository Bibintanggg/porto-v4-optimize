import { TechIconProps } from "@/lib/stackProps";
import React from "react"


const TechIcon = React.memo(({ item, onClick, size = 30 }: TechIconProps) => {
    const baseClasses = "flex items-center justify-center rounded-full backdrop-blur-2xl border border-gray-700 bg-white/5";

    if (item.name == "+9") {
        return (
            <button
                onClick={onClick}
                className={`w-12 h-12 ${baseClasses} ${item.className} cursor-pointer hover:bg-white/10 transition-colors`}>
                {item.name}
            </button>
        )
    }

    return (
        <div className={`w-12 h-12 ${baseClasses} ${item.className}`}>
            {React.cloneElement(item.icon as React.ReactElement, { size })}
        </div>
    )
});


const DetailAbout = React.memo(({ items, onShowStack}: {
    items: TechIconProps["item"][]
    onShowStack: () => void
}) => {

    return (
        <div className="grid grid-cols-3 gap-2 mt-4">
            {items.map((item) => (
                <TechIcon
                key={item.id}
                item={item}
                onClick={item.name === "+9" ? onShowStack : undefined}/>
            ))}
        </div>
    )
})

TechIcon.displayName = "TechIcon"
DetailAbout.displayName = "DetailAbout"
export {TechIcon, DetailAbout}