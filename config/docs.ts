import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
    mainNav: MainNavItem[],
    sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: "Documentation",
            href: "/docs",
        },
        {
            title: "Components",
            href: "/docs/components/accordion",
        },
    ],
    sidebarNav: [
        {
          title: "Categories",
          items: [
            {
              title: "Introduction",
              href: "/docs",
              items: [],
            },
            {
              title: "Installation",
              href: "/docs/installation",
              items: [],
            },
            {
              title: "components.json",
              href: "/docs/components-json",
              items: [],
            },
            {
              title: "Theming",
              href: "/docs/theming",
              items: [],
            },
            {
              title: "Dark mode",
              href: "/docs/dark-mode",
              items: [],
            },
          ],
        },
        {
          title: "Languages",
          items: [
            {
              title: "Accordion",
              href: "/docs/components/accordion",
              items: [],
            },
            {
              title: "Alert",
              href: "/docs/components/alert",
              items: [],
            },
            {
              title: "Alert Dialog",
              href: "/docs/components/alert-dialog",
              items: [],
            },
            {
              title: "Aspect Ratio",
              href: "/docs/components/aspect-ratio",
              items: [],
            },
            {
              title: "Avatar",
              href: "/docs/components/avatar",
              items: [],
            },
            {
              title: "Badge",
              href: "/docs/components/badge",
              items: [],
            },
            {
              title: "Breadcrumb",
              href: "/docs/components/breadcrumb",
              items: [],
              label: "New",
            },
            
          ],
        },
      ],

}