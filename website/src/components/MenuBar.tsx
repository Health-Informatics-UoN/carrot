import Link from "next/link";
import { SidebarButton } from "./sidebar-button";
import { sidebarItems } from "./MenuItems";
import { Sidebar } from "./sidebar";
import { ModeToggle } from "./mode-toggle";

export const MenuBar = () => {
  return (
    <>
      <Sidebar />
      <div className="hidden lg:flex lg:items-center sticky top-0 z-50 backdrop-blur border-b-2 border-gray-300 justify-between p-4 mb-4">
        <Link href={"/"}>
          <div className="text-2xl flex items-center font-semibold">
            <img
              className="w-[120px] dark:hidden"
              src="/carrot/carrot-logo.svg"
              alt="carrot-logo"
            />
            <img
              className="w-[120px] dark:block hidden"
              src="/carrot/carrot-logo-dark.svg"
              alt="carrot-logo"
            />
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            {sidebarItems.routes.map((link, idx) => (
              <Link key={idx} href={link.href}>
                <SidebarButton icon={link.icon} className="w-full">
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
