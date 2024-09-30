import { Project } from "@/components/Project";
import { UserProfile } from "@/components/UserProfile";
import { Separator } from "@/components/ui/separator";
import { getMyProjects } from "@/lib/server";
import { getServerSession } from "next-auth";

export default async function Profile() {
    const session = await getServerSession();
    const UserProjects = await getMyProjects(session?.user?.email!);
    console.log("Arraived");
    UserProjects?.map((project) => {
        project.price = undefined;
    });

    return (
        <>
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
                <UserProfile />
                <Separator className="my-8" />
                <div className="grid">
                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="text-center text-3xl font-semibold">
                                My Projects
                            </h2>
                        </div>
                        <div className="mt-5 grid grid-cols-1 place-items-center gap-x-20 gap-y-8 sm:grid-cols-2">
                            {UserProjects?.map((ProjectData, index) => (
                                <Project key={index} project={ProjectData} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
