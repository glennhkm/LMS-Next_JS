"use client";

import { SignIn, SignInWithMetamaskButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useSignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const pathname = usePathname();
  const isFactorOne = pathname.includes("/factor-one");

  const actionLink = document.querySelector('.cl-footerActionLink')
  // document.querySelector('.cl-footerActionLink').href = '/sign-up'
  return (
    <div className="flex justify-center">
      <SignIn
        appearance={{
          variables: {
            colorPrimary: "#D39F36",
            colorText: "black",
          },
          elements: {
            rootBox: "flex justify-center",
            card: "white rounded-md shadow drop-shadow-sm shadow-md border border-primary border-opacity-25 w-[23rem] lg:w-96 ",
            headerTitle: "text-2xl font-bold tracking-wide ",
            headerSubtitle: `${
              isFactorOne
                ? "hidden"
                : "bg-black bg-opacity-35 h-[0.1px] mt-4 w-full mx-auto"
            }`,
            header: "gap-2 text-center",
            formFieldLabelRow: "hidden",
            formFieldInput:
              "placeholder:italic shadow border border-primary border-opacity-10",
            socialButtonsBlockButton: "shadow w-auto",
            formButtonPrimary: "bg-primary",
            footerActionLink: "",
          },
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "auto",
          },
        }}
      />

      {/* {`${actionLink.href = '/sign-in'}`} */}
    </div>
  );
}

