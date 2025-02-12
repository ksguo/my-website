import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";
import Image from "next/image";

//components
import {
  GuestBookFormLoading,
  LoadingMessages,
} from "@/components/LoadingState";
import Messages from "@/components/Messages";
import MessageDescription from "@/components/MessageDescription";
import MessageForm from "@/components/MessageForm";




export default async function MessagePage() {
  const user = await currentUser();

  return (
    <div className="container mx-auto min-h-screen max-w-4xl p-8">
      <MessageDescription />

      <Suspense fallback={<GuestBookFormLoading />}>
        {user ? (
          <MessageForm>
            <Image
              src={user.imageUrl}
              width={40}
              height={40}
              alt="user profile image"
              className="rounded-full "
            />
          </MessageForm>
        ) : (
          <div className="flex items-center justify-start h-20 px-10 pr-2 text-sm rounded-lg bg-uk-background-secondary-light text-muted-foreground">
            🔒 Please log in to leave a message
          </div>
        )}
      </Suspense>

      <Suspense fallback={<LoadingMessages />}>
        <Messages />
      </Suspense>
    </div>
  );
}