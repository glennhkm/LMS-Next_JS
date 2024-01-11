import { useSignIn } from "@clerk/nextjs";
import React from "react";

const Home = () => {
  useSignIn;
  return (
    <main>
      <div className=" font-normal text-xl text-center px-5 md:px-12">Home</div>
    </main>
  );
};

export default Home;
