import { Projects, ProjectsType } from "@/components/Projects";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { getServerSession } from "next-auth";

const getUserProjects = async () => {
    const session = await getServerSession();
    const response = await axios.post(
        "http://localhost:3000/api/projects/myprojects",
        { email: session?.user?.email },
    );
    console.log(response.data.projects);
    return response.data.projects;
};

export default async function Profile() {
    const UserProjects: ProjectsType = await getUserProjects();
    UserProjects.map((project) => {
        project.price = undefined;
    });

    return (
        <>
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
                <UserProfile />
                <Separator   className="my-8" />
                <div  className="grid">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-semibold">
                                My Projects
                            </h2>
                            <Button variant="outline">View All</Button>
                        </div>
                        <div  className="grid gap-x-20 gap-y-8 mt-4 sm:grid-cols-2">
                            <Projects ProjectsData={UserProjects} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
