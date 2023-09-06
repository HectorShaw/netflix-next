"use client";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import UnauthPage from "../components/unauth-page";
import { GlobalContext } from "@/context";
import ManageAccounts from "../components/manage-accounts";

export default function Browse() {
  const {loggedInAccount} = useContext(GlobalContext)
  const { data: session } = useSession();
    console.log(session);
    if (session === null) return <UnauthPage />;
    if (loggedInAccount === null)
    return <ManageAccounts />
  return <div>Browse works</div>;
}
