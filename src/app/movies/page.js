"use client";

import { useSession } from "next-auth/react";
import UnauthPage from "../components/unauth-page";
import { useContext } from "react";


export default function Movies() {
  const { data: session } = useSession();
  console.log(session);
  const { loggedInAccount } = useContext(GlobalContext);

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccounts />;
  return <div>Movies</div>;
}
