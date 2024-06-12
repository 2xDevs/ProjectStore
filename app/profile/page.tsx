import { Projects, ProjectsType } from "@/components/Projects";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Profile() {
    const UserProjects: ProjectsType = [
        {
            id: 1,
            image: "https://picsum.photos/200",
            title: "Project A",
            categories: ["Web", "Mobile"],
            languages: ["React", "JavaScript"],
        },
        {
            id: 1,
            image: "https://picsum.photos/200",
            title: "Project B",
            categories: ["Web", "Desktop"],
            languages: ["Vue", "TypeScript"],
        },
        {
            id: 1,
            image: "https://picsum.photos/200",
            title: "Project C",
            categories: ["Mobile", "Desktop"],
            languages: ["Angular", "JavaScript"],
        },
        {
            id: 1,
            image: "https://picsum.photos/200",
            title: "Project D",
            categories: ["Web", "Mobile", "Desktop"],
            languages: ["React", "TypeScript"],
        },
    ];
    return (
        <>
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
                <UserProfile />
                <Separator className="my-8" />
                <div className="grid">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">
                                My Projects
                            </h2>
                            <Button variant="outline">View All</Button>
                        </div>
                        <div className="grid gap-x-20 gap-y-8 mt-4 sm:grid-cols-2">
                            <Projects ProjectsData={UserProjects} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
