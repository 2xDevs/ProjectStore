import { SingleProject } from "@/components/SingleProject";
import { getProject } from "@/lib/server";

export default async function Project({ params }: { params: { id: string } }) {
    const Project = await getProject(params.id);

    return (
        <div>
            <SingleProject Project={Project} />
        </div>
    );
}
