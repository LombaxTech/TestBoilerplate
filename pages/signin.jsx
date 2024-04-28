import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Signin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/");
  };

  return (
    <div className="flex justify-center pt-20">
      <div className="flex flex-col gap-4 border shadow-md p-8">
        <h1 className="text-2xl font-medium">Sign In</h1>

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

        <button className="btn btn-primary" onClick={signin}>
          Sign in
        </button>
      </div>
    </div>
  );
}
