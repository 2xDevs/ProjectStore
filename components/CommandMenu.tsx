"use client";

import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ProjectsType } from "@/types/project";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
                    className="p-0 md:p-2"
                    onClick={() => setDialogOpen(true)}
                >
                    <div className="items-center hidden gap-2 md:flex">
                        <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem]" />
                        Search...
                        <kbd className="bg-white/15 p-1.5 rounded-sm text-xs leading-3">
                            {shortcut}
                        </kbd>
                    </div>
                    <div className="block md:hidden">
                        <MagnifyingGlassIcon className="h-7 w-7" />
                    </div>
                </Button>
                <DialogContent className="max-w-2xl gap-0 p-0 ">
                    <div className="flex items-center px-4 py-2 border-b">
                        <MagnifyingGlassIcon className="h-[1.5rem] w-[1.5rem]" />
                        <Input
                            type="text"
                            placeholder="Type title"
                            className="text-base border-none shadow-none focus-visible:outline-none focus-visible:ring-0"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <DialogClose>
                            <Cross2Icon className="w-4 h-4" />
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
                                <Link href={`/proects/${Project.id}`} passHref>
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
            <div className="flex gap-2 px-4 py-2 border-b hover:bg-slate-100 dark:hover:bg-slate-800">
                <Image
                    src={image}
                    width={1920}
                    height={1080}
                    className="max-w-full w-12 object-cover aspect-square rounded"
                    alt={title}
                />
                <div className="w-[90%]">
                    <div className="text-lg">{title}</div>
                    <div className="flex gap-2">
                        {categories.map((category, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[0.65rem]"
                            >
                                {category}
                            </span>
                        ))}
                        {languages.map((language, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-[0.65rem]"
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

/**
 * import React from 'react';
import cn from 'classnames';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded', // Common styles
        'bg-transparent text-gray-700 border border-gray-300', // Ghost variant styles
        'hover:bg-gray-100', // Hover effect for ghost variant
        'md:bg-white md:text-black md:border-black', // Outline variant styles for md and above
        className // Allow additional custom styles
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
 */