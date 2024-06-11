

import { Projects, ProjectsType } from "@/components/Projects";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

export default function Profile() {
    const UserProjects: ProjectsType = [
        {
            image: "https://picsum.photos/200",
            title: "random",
            belongsTo: "ML",
        },
        {
            image: "https://picsum.photos/200",
            title: "random",
            belongsTo: "ML",
        },
        {
            image: "https://picsum.photos/200",
            title: "random",
            belongsTo: "ML",
        },
        {
            image: "https://picsum.photos/200",
            title: "random",
            belongsTo: "ML",
        },
    ];
    return (
        <>
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <UserProfile />
                <Separator className="my-8" />
                <div className="grid gap-8">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">
                                My Projects
                            </h2>
                            <Button variant="outline">View All</Button>
                        </div>
                        <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
                            <Projects ProjectsData={UserProjects} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
