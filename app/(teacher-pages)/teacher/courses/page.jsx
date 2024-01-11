"use client";

import React from "react";
import { ButtonPrimary } from "../../../../components/button";
import { BookPlus } from "lucide-react";

const Page = () => {
  return (
    <ButtonPrimary href="/teacher/create">
      <div className="flex gap-2 items-center">
        <BookPlus width={18} />
        New Course
      </div>
    </ButtonPrimary>
  );
};

export default Page;
