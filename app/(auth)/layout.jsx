"use client";

import React from "react";
import { ButtonSecondary } from "../../components/button";
import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { SC_NoText } from "../../components/logo";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <main className="h-screen w-full flex flex-col gap-7 justify-center items-center">
      <div>
        <ButtonSecondary
          href="/"
          className="group fixed top-2 left-3 bg-transparent text-primary border-none hover:text-yellow-600"
        >
          <div className="group flex gap-2 items-center justify-between font-bold text-lg tracking-wide">
            <ArrowLeftFromLine className="-ml-[0.18rem]" width={28} />
            HOME
          </div>
        </ButtonSecondary>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-4 justify-center items-center  lg:items-center lg:justify-between xl:justify-center xl:gap-12 lg:px-16 xl:px-32 ">
        <div className="flex gap-2 items-center">
          <SC_NoText
            logo_bg="white"
            shapeColor="black"
            wordColor="white"
            className="w-[52px] h-[101px] lg:w-[152px] lg:h-[201px]"
          />
          <div className="flex flex-col gap-1">
            <h1 className="xl:text-4xl text-3xl">StudentsCatalyst</h1>
            <h6 className="italic text-[0.81rem] font-light pl-[0.15rem]">
              Network, Inspire, and Go Beyond!
            </h6>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
