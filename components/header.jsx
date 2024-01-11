"use client";

import React from "react";
import { LogoSC } from "./logo";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { NavbarMenu } from "./navbarmenu";
import { ButtonPrimary } from "./button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const isSignInPage =
    pathname.includes("/sign-in") || pathname.includes("/sign-up");

  return (
    <div
      className={` ${
        isSignInPage
          ? "hidden"
          : "bg-white w-full h-20 mb-5 px-5 md:px-12 flex justify-between items-center shadow-md font-semibold"
      }`}
    >
      <div className="relative w-36 h-12 md:w-56 md:h-[4.5rem]">
        <Link href="/">
          <LogoSC />
        </Link>
      </div>
      <div className="flex">
        {/* udah login */}
        <SignedIn>
          <NavbarMenu />
        </SignedIn>

        {/* belum login */}
        <SignedOut>
          <ButtonPrimary href={"/sign-in"}>SIGN IN</ButtonPrimary>
        </SignedOut>
      </div>
    </div>
  );
};
