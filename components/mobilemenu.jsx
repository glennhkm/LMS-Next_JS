"use client";

import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../@/components/ui/sheet";
import { Menu, Layout, Compass, BarChart, List } from "lucide-react";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname.startsWith("/teacher");

  return (
    <main className="relative flex items-center">
      <Sheet>
        <SheetTrigger className="hover:opacity-50 transition">
          <Menu />
        </SheetTrigger>
        <SheetContent className="w-2/5 rounded-md ml-auto bg-white shadow-md absolute top-16 right-1 py-5 sm:hidden h-auto ">
          <ul className="flex flex-col sm:gap-12 text-black line-clamp-2 divide-y-2">
            <li className="active:text-primary pb-4 items-center text-sm duration-200">
              {isTeacherPage ? (
                <div
                  className={`flex gap-2 ${
                    pathname.endsWith("/courses") ? "text-primary" : ""
                  }`}
                >
                  <List height={20} width={20} />
                  <Link href="/teacher/courses"> Courses </Link>
                </div>
              ) : (
                <div
                  className={`flex gap-2 ${
                    pathname.startsWith("/dashboard") ? "text-primary" : ""
                  }`}
                >
                  <Layout height={20} width={20} />
                  <Link href="/dashboard"> Dashboard </Link>
                </div>
              )}
            </li>
            <li className="active:text-primary pt-4 items-center text-sm duration-200">
              {isTeacherPage ? (
                <div
                  className={`flex gap-2 ${
                    pathname.endsWith("/analytics") ? "text-primary" : ""
                  }`}
                >
                  <BarChart width={20} height={20} />
                  <Link href="/teacher/analytics"> Analytics </Link>
                </div>
              ) : (
                <div
                  className={`flex gap-2 ${
                    pathname.startsWith("/browse") ? "text-primary" : ""
                  }`}
                >
                  <Compass width={20} height={20} />
                  <Link href="/browse"> Browse </Link>
                </div>
              )}
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </main>
  );
};
