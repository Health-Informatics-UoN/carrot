import { BookMarked, Github, LogIn, LucideIcon, CircleDollarSign, Activity } from "lucide-react";

export interface SidebarItems {
  routes: Array<{
    label: string;
    href: string;
    icon?: LucideIcon;
  }>;
}

export const sidebarItems: SidebarItems = {
  routes: [
    {
      label: "Documentation",
      href: "/documentation",
      icon: BookMarked,
    },
    {
      label: "GitHub",
      href: "https://github.com/Health-Informatics-UoN/Carrot",
      icon: Github,
    },
    {
      label: "Status",
      href: "https://status.carrot.ac.uk",
      icon: Activity,
    },
    {
      label: "Login",
      href: "https://mapper.carrot.ac.uk",
      icon: LogIn,
    },
  ],
};
