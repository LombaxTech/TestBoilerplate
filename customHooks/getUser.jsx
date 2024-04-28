import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

export default function getUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) return setUser(user);

      setUser(null);
    });
  }, []);

  return {
    user,
    setUser,
  };
}
