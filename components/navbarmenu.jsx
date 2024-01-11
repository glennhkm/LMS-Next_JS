"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ErrorButton, ButtonSecondary } from "./button";
import { MobileMenu } from "./mobilemenu";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export const NavbarMenu = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname.startsWith("/teacher");
  const isPlayerPage = pathname.includes("/chapter");

  return (
    <ul className="flex gap-5 sm:gap-12 items-center">
      <li
        className={`hover:text-primary hidden sm:flex hover:scale-110 duration-300 ${
          pathname.startsWith("/dashboard") || pathname.endsWith("/courses")
            ? "text-primary"
            : ""
        }`}
      >
        <Link href={isTeacherPage ? "/teacher/courses" : "/dashboard"}>
          {" "}
          {isTeacherPage ? "Courses" : "Dashboard"}{" "}
        </Link>
      </li>
      <li
        className={`hover:text-primary hidden sm:flex hover:scale-110 duration-300 ${
          pathname.startsWith("/browse") || pathname.endsWith("/analytics")
            ? "text-primary"
            : ""
        }`}
      >
        <Link href={isTeacherPage ? "/teacher/analytics" : "/browse"}>
          {" "}
          {isTeacherPage ? "Analytics" : "Browse"}{" "}
        </Link>
      </li>
      {isTeacherPage || isPlayerPage ? (
        <li>
          <ErrorButton href="/dashboard">
            <div className="flex gap-2 items-center">
              Exit
              <LogOut width={16} height={16} />
            </div>
          </ErrorButton>
        </li>
      ) : (
        <li>
          <ButtonSecondary href="/teacher/courses">
            Teacher Mode
          </ButtonSecondary>
        </li>
      )}
      <li>
        <UserButton afterSignOutUrl="/" />
      </li>
      <li className="flex sm:hidden">
        <MobileMenu />
      </li>
    </ul>
  );
};
