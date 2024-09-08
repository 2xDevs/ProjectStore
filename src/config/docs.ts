import { MainNavItem } from "@/types/nav"

interface DocsConfig {
    mainNav: MainNavItem[],
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "My Projects",
            href: "/profile#my-projects",
        },
    ],
}
