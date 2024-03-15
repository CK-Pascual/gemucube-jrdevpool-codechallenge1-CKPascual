"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link"

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
  

      <nav>
  <Link className="text-sm mt-3 text-right" href={"/dashboard"} style={{ marginLeft: "20px" }}>
    Dashboard                
  </Link>
  <Link className="text-sm mt-3 text-right" href={"/homepage"} style={{ marginLeft: "20px" }}>
    Homepage                  
  </Link>
  <Link className="text-sm mt-3 text-right" href={"/logs"} style={{ marginLeft: "20px" }}>
    Logs
  </Link>
  <Link className="text-sm mt-3 text-right" href={"/profile"} style={{ marginLeft: "20px" }}>
    Profile
  </Link>
</nav>
  
  </div>
   
  );
}