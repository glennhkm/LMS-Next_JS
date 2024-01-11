import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import { db } from "../../../@/lib/db";
import { capitalCase } from "change-case";

export async function POST(req) {
  try {
    const { userId } = auth();
    const { title } = await req.json();
    const user = await currentUser();

    const email = user.emailAddresses[user.emailAddresses.length - 1].emailAddress;
    const fullName = capitalCase(`${user.firstName} ${user.lastName}`);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        email,
        title: capitalCase(title),
        fullName,
        // imageUrl: user.imageUrl
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
