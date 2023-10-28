import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, surname, username, password } = body;

    // check if email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    // check if username already exists
    const existingUserByUsername = await prisma.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        name,
        surname,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        user: newUser,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
