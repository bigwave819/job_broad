'use client'

import { useSession, signOut } from "next-auth/react";

export default function Home() {

    const { data: session } = useSession();

  if (!session) {
    return(
      <div>Not sign in </div>
    )
  }
  return (
    <div>
      <p>Signed in as { session.user?.name }</p>
      <button onClick={() => signOut()} className="bg-blue-500 text-500">Sign out</button>
    </div>
  );
}
