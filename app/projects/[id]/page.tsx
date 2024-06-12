import { SingleProject } from "@/components/SingleProject";

export default function Project({ params }: { params: { id: string } }) {
    const Project = {
        id: 1,
        image: "https://picsum.photos/200",
        title: "Project A",
        categories: ["Web", "Mobile"],
        languages: ["React", "JavaScript"],
    };

    return (
        <div>
            <SingleProject Project={Project} />
        </div>
    );
}
