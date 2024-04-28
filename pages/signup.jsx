import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/");
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="flex flex-col gap-4 border shadow-md p-8">
        <h1 className="text-2xl font-medium">Sign Up</h1>

        <input
          type="email"
          className="p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className="p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button className="btn btn-primary" onClick={createAccount}>
          Create account
        </button>
      </div>
    </div>
  );
}
