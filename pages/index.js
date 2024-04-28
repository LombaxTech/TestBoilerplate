import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import getUser from "@/customHooks/getUser";

export default function Home() {
  const { user } = getUser();

  return (
    <div>
      <h1 class="text-2xl font-bold">Home</h1>
    </div>
  );
}
