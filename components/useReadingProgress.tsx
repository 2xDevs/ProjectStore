"use client"
import { useEffect, useState } from "react"

export const useReadingProgress = () => {
    const scrollProgress = window.scrollY
    const scrollHeight = document.body.scrollHeight - window.innerHeight
    const [completion, setCompletion] = useState(Number((scrollProgress / scrollHeight).toFixed(2)));
    useEffect(() => {
        const updateScrollCompletion = () => {
            const scrollProgress = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            if(scrollHeight){
                const progress = (scrollProgress / scrollHeight).toFixed(2); // Returns a string
                setCompletion(Number(progress) * 100);
            }
        }
        window.addEventListener("scroll", updateScrollCompletion)

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion)
        }
    })

    return completion
}