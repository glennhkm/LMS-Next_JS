"use client";

import { useUser } from "@clerk/nextjs";

const Page = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="text-center ">
      <div>
        Hello, <b>{user.username}</b> welcome to StudentsCatalyst
      </div>
    </main>
  );
};

export default Page;
