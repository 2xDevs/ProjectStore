"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectsType } from "@/types/project";
import Link from "next/link";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

export function CommandMenu({ Projects }: { Projects: ProjectsType }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const scrollableContainerRef = useRef<HTMLDivElement>(null);
    const [input, setInput] = useState("");
    const [searchProjects, setSearchProjects] = useState(Projects);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [shortcut, setShortcut] = useState("Ctrl K");

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.code === "KeyK" && (event.ctrlKey || event.metaKey)) {
                event.preventDefault();
                setDialogOpen(true);
            } else if (event.code === "ArrowDown") {
                event.preventDefault();
                setSelectedIndex((prevIndex) =>
                    Math.min(prevIndex + 1, searchProjects.length - 1),
                );
            } else if (event.code === "ArrowUp") {
                event.preventDefault();
                setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            } else if (event.code === "Enter" && selectedIndex !== -1) {
                event.preventDefault();
                document.getElementById(`track-link-${selectedIndex}`)?.click();
            }
            if (event.code === "ArrowDown" || event.code === "ArrowUp") {
                event.preventDefault();
                const container = scrollableContainerRef.current;
                if (container) {
                    if (selectedIndex > 3) {
                        const scrollAmount =
                            event.code === "ArrowDown" ? 85 : -80;
                        container.scrollBy({
                            top: scrollAmount,
                            behavior: "smooth",
                        });
                    }
                }
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [searchProjects, selectedIndex]);

    useEffect(() => {
        const foundProjects = Projects.filter((Project) => {
            return (
                Project.title.toLowerCase().includes(input.toLowerCase()) ||
                JSON.stringify(Project.categories)
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase()) ||
                JSON.stringify(Project.languages)
                    .toLocaleLowerCase()
                    .includes(input.toLocaleLowerCase())
            );
        });
        setSearchProjects(foundProjects);
        setSelectedIndex(-1);
    }, [input, Projects]);

    useEffect(() => {
        const isMacOS = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
        setShortcut(isMacOS ? "Cmd K" : "Ctrl K");
    }, []);

    function handleClose(open: boolean) {
        if (!open) setDialogOpen(false);
        setInput("");
    }

    return (
        <>
            <Dialog open={dialogOpen} onOpenChange={handleClose}>
                <Button
                    variant="search"
                    className="p-2"
                    onClick={() => setDialogOpen(true)}
                >
                    <div className="hidden items-center gap-2 sm:flex">
                        <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                        <span className="mr-2 hidden lg:block">
                            Search Projects...
                        </span>
                        <span className="mr-2 hidden sm:block lg:hidden">
                            Search...
                        </span>
                        <kbd className="rounded-sm bg-white/15 p-1.5 text-xs leading-3">
                            {shortcut}
                        </kbd>
                    </div>
                    <div className="block sm:hidden">
                        <MagnifyingGlassIcon className="h-6 w-6" />
                    </div>
                </Button>
                <DialogContent className="max-w-2xl gap-0 p-0">
                    <div className="flex items-center border-b px-4 py-2">
                        <MagnifyingGlassIcon className="h-[1.5rem] w-[1.5rem]" />
                        <input
                            type="text"
                            placeholder="Search Projects ..."
                            className="h-10 w-full rounded-md bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <DialogClose>
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </DialogClose>
                    </div>
                    <div
                        className="h-[400px] overflow-y-scroll"
                        ref={scrollableContainerRef}
                    >
                        {searchProjects.map((Project, index) => (
                            <div
                                key={Project.id}
                                className={`p-2 ${index === selectedIndex ? "bg-blue-600/20" : ""}`}
                            >
                                <Link href={`/projects/${Project.id}`} passHref>
                                    <p
                                        id={`track-link-${index}`}
                                        tabIndex={-1}
                                        style={{ display: "none" }}
                                    >
                                        Navigate
                                    </p>
                                </Link>
                                <SearchableProjectList
                                    id={Project.id}
                                    image={Project.image}
                                    title={Project.title}
                                    categories={Project.categories}
                                    languages={Project.languages}
                                />
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export function SearchableProjectList({
    id,
    image,
    title,
    categories,
    languages,
}: {
    id: number;
    image: string;
    title: string;
    categories: string[];
    languages: string[];
}) {
    return (
        <Link href={`/projects/${id}`}>
            <div className="flex gap-2 border-b px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Image
                    src={image}
                    width={1920}
                    height={1080}
                    className="aspect-square w-12 max-w-full rounded object-cover"
                    alt={title}
                />
                <div className="w-[90%]">
                    <div className="text-lg">{title}</div>
                    <div className="flex gap-2">
                        {categories.map((category, index) => (
                            <span
                                key={index}
                                className="rounded-md bg-gray-100 px-2 py-1 text-[0.65rem] text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            >
                                {category}
                            </span>
                        ))}
                        {languages.map((language, index) => (
                            <span
                                key={index}
                                className="rounded-md bg-gray-100 px-2 py-1 text-[0.65rem] text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
