import { AllProjects } from "@/components/AllProjects";
import { getAllProjects } from "@/lib/server";

export default async function Component() {
    const projects = await getAllProjects()
    return (
        <AllProjects projects={projects}/>
    )
}
    