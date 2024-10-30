"use client"

import { fetchUserInfo } from "../lib/data"
import { useSession } from "next-auth/react"


export default function UserInfo() {

   const { data: session} = useSession();

   console.log("session: ", session);
   

    return (

        <div>
        {session ? (
          <p>User ID: {session.user.id}</p>
        ) : (
          <p>Not signed in</p>
        )}
      </div>
    );

}