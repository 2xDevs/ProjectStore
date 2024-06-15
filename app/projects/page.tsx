"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Project } from "@/components/Project";
import { getAllProjects } from "@/lib/server";
import { ProjectsType } from "@/types/project";

const categories = ["AI", "ML", "NLP", "WEB", "APP", "DS", "DL"];
const languages = [
    "C",
    "C++",
    "C#",
    "JAVA",
    "PYTHON",
    "HTML/CSS",
    "JAVASCRIPT",
    "REACT",
    "ANGULAR",
    "VUE",
    "NEXT",
    "PHP",
    "KOTLIN",
];

export default function Component() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    let projects: ProjectsType | null;

    useEffect(() => {
        const fetchData = async () => {
            projects = await getAllProjects()
        };
        fetchData()
    }, [])
    

    const handleToggle = (
        item: string,
        list: string[],
        setList: React.Dispatch<React.SetStateAction<string[]>>,
    ) => {
        setList(
            list.includes(item)
                ? list.filter((i) => i !== item)
                : [...list, item],
        );
    };

    const filteredProjects = projects!.filter(
        (project) =>
            (selectedCategories.length === 0 ||
                selectedCategories.some((category) =>
                    project.categories.includes(category),
                )) &&
            (selectedLanguages.length === 0 ||
                selectedLanguages.some((language) =>
                    project.languages.includes(language),
                )),
    );

    return (
        <div className="flex max-h-screen  max-w-screen-2xl mx-auto">
            <div className="bg-white hidden lg:block dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 w-64 p-6">
                <div className="flex mb-4 h-8 items-center justify-between ">
                    <h2 className="text-lg font-semibold">Filter Projects</h2>
                    {(selectedCategories.length > 0 ||
                        selectedLanguages.length > 0) && (
                        <div className="">
                            <Button
                                className="p-4 px-3 h-0"
                                onClick={() => {
                                    setSelectedCategories([]);
                                    setSelectedLanguages([]);
                                }}
                            >
                                Reset
                            </Button>
                        </div>
                    )}
                </div>
                <div className="space-y-4">
                    <FilterSection
                        title="Categories"
                        items={categories}
                        selectedItems={selectedCategories}
                        onChange={(category) =>
                            handleToggle(
                                category,
                                selectedCategories,
                                setSelectedCategories,
                            )
                        }
                    />
                    <FilterSection
                        title="Languages"
                        items={languages}
                        selectedItems={selectedLanguages}
                        onChange={(language) =>
                            handleToggle(
                                language,
                                selectedLanguages,
                                setSelectedLanguages,
                            )
                        }
                    />
                </div>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3 gap-y-8 gap-x-6">
                    {filteredProjects.map((ProjectData, index) => (
                        <Project ProjectData={ProjectData} />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface FilterSectionProps {
    title: string;
    items: string[];
    selectedItems: string[];
    onChange: (item: string) => void;
}

function FilterSection({
    title,
    items,
    selectedItems,
    onChange,
}: FilterSectionProps) {
    return (
        <div>
            <h3 className="text-sm font-semibold mb-2">{title}</h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <div key={item} className="flex items-center">
                        <Checkbox
                            checked={selectedItems.includes(item)}
                            onCheckedChange={() => onChange(item)}
                        />
                        <span className="ml-2 text-xs">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
