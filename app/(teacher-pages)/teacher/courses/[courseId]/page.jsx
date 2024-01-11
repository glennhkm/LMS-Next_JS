import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from '../../../../../@/lib/db'
import React from "react";
import { LayoutDashboard } from "lucide-react";
import { FormAttribute } from '../../../../../components/form'

const CourseId = async ({ params }) => {

  const { userId } = auth();
  const course = await db.course.findUnique({
    where: {
      id: params.courseId
    }
  })

  if (!userId || !course) {
    return redirect('/dashboard');
  }

  const requireFields = [
    course.title,
    course.description,
    course.imageUrl,  
    course.price,
    course.categoryId,
  ]

  const totalRequireFields = requireFields.length;
  const process = `${requireFields.filter(Boolean).length}/${totalRequireFields}`

  return (
    <div className="mx-auto w-full flex flex-col gap-7">

    <div className="flex flex-col gap-2 items-center sm:items-start">
      <h1 className="font-bold text-2xl">Course Setup</h1>
      <div className="flex gap-2">
        <p>Complete fields</p>
        <p>({process})</p>
      </div>
    </div>

    <div className="flex gap-2 items-center">
      <div className="rounded-md text-white bg-primary p-1">
        <LayoutDashboard width={20} height={20}/>
      </div>
      <h2 className="">Complete your course</h2>
    </div>

    <div className="flex flex-col gap-3">
      <FormAttribute attributeName='title' attributeBody={course.title} courseId={course.id}/>
      <FormAttribute attributeName='description' attributeBody={course.description} courseId={course.id}/>
      <FormAttribute attributeName='title' attributeBody={course.title} courseId={course.id}/>
      <FormAttribute attributeName='title' attributeBody={course.title} courseId={course.id}/>
    </div>

    </div>
  );
};

export default CourseId;
