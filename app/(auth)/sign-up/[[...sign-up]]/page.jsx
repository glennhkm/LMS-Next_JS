import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp
    appearance={{
      variables: {
        colorPrimary: "#D39F36",
        colorText: "black",
      },
      elements: {
        rootBox: "flex justify-center",
        card: "white rounded-md shadow drop-shadow-sm shadow-md border border-primary border-opacity-25 w-[23rem] lg:w-96 ",
      },
      layout: {
        socialButtonsPlacement: "bottom"
      }
    }}
  />;
}