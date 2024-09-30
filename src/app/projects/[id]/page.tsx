import { ProjectDetails } from "@/components/project-details";
import { SingleProject } from "@/components/SingleProject";
import { getCachedProject } from "@/lib/server";
import { notFound } from "next/navigation";

export default async function Project({ params }: { params: { id: string } }) {
    const Project = await getCachedProject(params.id);
    if (!Project) {
        notFound();
    }

    return (
        <div>
            {/* <SingleProject Project={Project} /> */}
            <ProjectDetails project={Project} />
        </div>
    );
}
