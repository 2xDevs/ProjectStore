import { AllProjects } from "@/components/AllProjects";
import { getAllCachedProjects } from "@/lib/server";

export default async function Component() {
  const projects = await getAllCachedProjects();
  return <AllProjects projects={projects} />;
}
