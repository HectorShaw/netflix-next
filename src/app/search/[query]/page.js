'use client'
import { useSession } from "next-auth/react";
import UnauthPage from "../components/unauth-page";



export default function Search() {
  const { data: session } = useSession();
  console.log(session);
  const {loggedInAccount} = useContext(GlobalContext)

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null)
  return <ManageAccounts />
  return (
    <div>Search</div>
  )
}
