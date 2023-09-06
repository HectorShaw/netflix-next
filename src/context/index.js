"use client";
import CircleLoader from "@/app/components/circle-loader";
import { useSession } from "next-auth/react";
import { createContext, useState } from "react";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [loggedInAccount, setloggedInAccount] = useState(null);

  const { data: session } = useSession();

  if (session === undefined) return <CircleLoader />;

  return (
    <GlobalContext.Provider value={{ loggedInAccount, setloggedInAccount }}>
      {/* this states that the user is loggedIn or Not */}
      {children}
    </GlobalContext.Provider>
  );
}
