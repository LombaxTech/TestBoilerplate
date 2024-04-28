import getUser from "@/customHooks/getUser";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { user } = getUser();

  const signout = async () => {
    await signOut(auth);
  };

  return (
    <div className="p-4 flex items-center justify-between shadow-md">
      <h1 className="text-2xl font-bold">
        <Link href={"/"}>Logo</Link>
      </h1>

      <ul className="flex gap-4 items-center">
        {!user && (
          <>
            <li>
              <Link href={"/signup"}>Sign up</Link>
            </li>
            <li>
              <Link href={"/signin"}>Sign In</Link>
            </li>
          </>
        )}

        {user && (
          <li className="cursor-pointer" onClick={signout}>
            Sign out
          </li>
        )}
      </ul>
    </div>
  );
}
