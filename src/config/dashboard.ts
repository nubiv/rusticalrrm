import { type DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/dashboard",
    },
    {
      title: "Support",
      href: "/dashboard",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Compony 1",
      href: "/dashboard",
      icon: "building2",
    },
    {
      title: "Compony 2",
      href: "/dashboard",
      icon: "building2",
    },
    {
      title: "Compony 3",
      href: "/dashboard",
      icon: "building2",
    },
  ],
}