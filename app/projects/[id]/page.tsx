import { SingleProject } from "@/components/SingleProject";
import axios from "axios";

const getSingleProject = async (id: string) => {
    const response = await axios.get(
        `${process.env.NEXTAUTH_URL}/api/projects/${id}`
    );
    return response.data.project;
};

export default async function Project({ params }: { params: { id: string } }) {
    const Project = await getSingleProject(params.id);

    return (
        <div>
            <SingleProject Project={Project} />
        </div>
    );
}
