import { SingleProject } from "@/components/SingleProject";
import { getCachedProject } from "@/lib/server";

export default async function Project({ params }: { params: { id: string } }) {
    const Project = await getCachedProject(params.id);

    return (
        <div>
            <SingleProject Project={Project} />
        </div>
    );
}
