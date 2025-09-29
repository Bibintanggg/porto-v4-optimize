"use client";

import { useEffect, useState } from "react";

type Props = {
    words: string[];
    typingSpeed?: number;
    deleteSpeed?: number;
    delayBetween?: number;
    className?: number;
}

export default function Typewriter({
    words,
    typingSpeed = 100,
    deleteSpeed = 100,
    delayBetween = 2000
}: Props) {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[index % words.length];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), delayBetween);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? deleteSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, words, typingSpeed, deleteSpeed, delayBetween]);

    return (
        <div className="text-2xl pt-5">
            {text}
            <span className="animate-pulse">|</span>
        </div>
    )
}