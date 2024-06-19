"use client";
import { useEffect, useState } from "react";

export const useReadingProgress = () => {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        const updateScrollCompletion = () => {
            const scrollProgress = window.scrollY;
            const scrollHeight =
                document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                const progress = (scrollProgress / scrollHeight).toFixed(2); // Returns a string
                setCompletion(Number(progress) * 100);
            }
        };

        const initialScrollProgress = window.scrollY;
        const initialScrollHeight =
            document.body.scrollHeight - window.innerHeight;
        if (initialScrollHeight) {
            const initialProgress = (
                initialScrollProgress / initialScrollHeight
            ).toFixed(2);
            setCompletion(Number(initialProgress) * 100);
        }

        window.addEventListener("scroll", updateScrollCompletion);

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);

    return completion;
};
