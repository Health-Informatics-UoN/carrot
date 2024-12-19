import { BookMarked, Github, LogIn, LucideIcon } from "lucide-react";

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
      href: "https://github.com/Health-Informatics-UoN/Carrot-Mapper",
      icon: Github,
    },
    {
      label: "Login",
      href: `${process.env.LOGIN_LINK}`,
      icon: LogIn,
    },
  ],
};
