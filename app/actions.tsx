"use server"

import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma" 
import { revalidatePath } from "next/cache"

export async function createMessage(formData: FormData): Promise<void> {
  const user = await currentUser()
  if (!user) throw new Error("Unauthorized")

  await prisma.message.create({
    data: {
      message: formData.get("message") as string,
      userId: user.id,
      userName: user.username ?? user.firstName ?? "Anonymous",
      userImg: user.imageUrl,
    },
  })

  revalidatePath("/message")
}