"use client";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SidebarButton } from "./sidebar-button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { sidebarItems } from "./MenuItems";

export function Sidebar({ userName }: { userName?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="flex gap-3 p-4 items-center justify-between border-b-2 border-gray-300 mb-4 lg:hidden">
      <div className="flex items-center">
        <div className="flex items-center">
          {" "}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size={"sm"}
                className="mr-4 flex items-center justify-center"
                aria-label="Menu Button"
              >
                <Menu size={25} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="px-3 py-4 w-[350px]">
              <SheetHeader className="flex flex-row justify-between items-center rounded-lg w-full py-3">
                <Link href={"/"}>
                  <div className="text-2xl flex items-center font-semibold">
                    <img
                      className="w-[120px] dark:hidden"
                      src="/carrot-logo.svg"
                      alt="carrot-logo"
                    />
                    <img
                      className="w-[120px] dark:block hidden"
                      src="/carrot-logo-dark.svg"
                      alt="carrot-logo"
                    />
                  </div>
                </Link>
              </SheetHeader>
              <div className="h-full">
                <div className="flex mt-7 flex-col w-full gap-1">
                  {sidebarItems.routes.map((link, idx) => (
                    <Link key={idx} href={link.href}>
                      <SidebarButton
                        variant={pathname === link.href ? "secondary" : "ghost"}
                        icon={link.icon}
                        className="w-full"
                      >
                        {link.label}
                      </SidebarButton>
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Link href={"/"}>
          <div className="text-2xl flex items-center font-semibold">
            <img
              className="w-[120px] dark:hidden"
              src="/carrot-logo.svg"
              alt="carrot-logo"
            />
            <img
              className="w-[120px] dark:block hidden"
              src="/carrot-logo-dark.svg"
              alt="carrot-logo"
            />
          </div>
        </Link>
      </div>
      <div className="justify-end">
        <ModeToggle />
      </div>
    </div>
  );
}
