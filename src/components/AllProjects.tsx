"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Project } from "@/components/Project";
import { ProjectsType } from "@/types/project";
import { Label } from "./ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FilterIcon } from "lucide-react";

const categories = ["AI", "ML", "NLP", "WEB", "APP", "DS", "DL"];
const languages = [
    "C",
    "C++",
    "C#",
    "JAVA",
    "PYTHON",
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "ANGULAR",
    "VUE",
    "NEXT",
    "PHP",
    "KOTLIN",
];

export const AllProjects = ({
    projects,
}: {
    projects: ProjectsType | null;
}) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

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
        <div className="mx-auto flex max-h-screen max-w-screen-2xl">
            <div className="hidden w-64 border-r border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 lg:block">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filter Projects</h2>
                    <Button
                        disabled={
                            selectedCategories.length <= 0 &&
                            selectedLanguages.length <= 0
                        }
                        className="h-0 p-4 px-3"
                        onClick={() => {
                            setSelectedCategories([]);
                            setSelectedLanguages([]);
                        }}
                    >
                        Reset
                    </Button>
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
            <div className="flex-1 overflow-y-auto p-6">
                <div className="mb-2 flex justify-end lg:hidden">
                    <MobileFilterSection
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedLanguages={selectedLanguages}
                        setSelectedLanguages={setSelectedLanguages}
                    />
                </div>
                <div className="grid grid-cols-1 place-items-center gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-3">
                    {filteredProjects.map((ProjectData, index) => (
                        <Project key={index} ProjectData={ProjectData} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface FilterSectionProps {
    title: string;
    items: string[];
    selectedItems: string[];
    onChange: (item: string) => void;
}

const FilterSection = ({
    title,
    items,
    selectedItems,
    onChange,
}: FilterSectionProps) => {
    return (
        <div>
            <h3 className="mb-2 text-sm font-semibold">{title}</h3>
            <div className="space-y-2">
                {items.map((item) => (
                    <div
                        key={item}
                        className="flex w-fit cursor-pointer items-center"
                    >
                        <Checkbox
                            id={item}
                            checked={selectedItems.includes(item)}
                            onCheckedChange={() => onChange(item)}
                        />
                        <Label
                            htmlFor={item}
                            className="ml-2 cursor-pointer text-xs"
                        >
                            {item}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
};

const MobileFilterSection = ({
    selectedCategories,
    setSelectedCategories,
    selectedLanguages,
    setSelectedLanguages,
}: {
    selectedCategories: string[];
    setSelectedCategories: Dispatch<SetStateAction<string[]>>;
    selectedLanguages: string[];
    setSelectedLanguages: Dispatch<SetStateAction<string[]>>;
}) => {
    const [open, setOpen] = useState(false);

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

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="secondary" className="text-base">
                    <div className="flex items-center gap-2">
                        <span>Filter</span>
                        <FilterIcon className="h-5 w-5" />
                    </div>
                    <span className="sr-only">Toggle Filter Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-8 lg:hidden">
                <div className="my-6 flex items-center justify-between gap-2">
                    <h2 className="text-base font-semibold sm:text-xl">
                        Filter Projects
                    </h2>
                    <div>
                        <Button
                            disabled={
                                selectedCategories.length <= 0 &&
                                selectedLanguages.length <= 0
                            }
                            className="h-0 p-4 px-3"
                            onClick={() => {
                                setSelectedCategories([]);
                                setSelectedLanguages([]);
                            }}
                        >
                            Reset
                        </Button>
                    </div>
                </div>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
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
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};
