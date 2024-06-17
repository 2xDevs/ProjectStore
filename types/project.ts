export type ProjectType = {
    id: number;
    image: string;
    title: string;
    content?: string;
    categories: string[];
    languages: string[];
    price?: number | null;
    fileLink?: string;
};

export type ProjectsType = ProjectType[];
