"use client"

import { fetchUserInfo } from "../lib/data"
import { useSession } from "next-auth/react"


export default function UserInfo() {

   const { data: session, status } = useSession();

   console.log("session: ", session);
   console.log("status",status);


   if (status === "loading") {
        return (
            <div>
                <p>I'm Still Loading!!!!</p>
            </div>

        )

   }
   if (status === "authenticated") {
        console.log(session)
        return (
            <div>
                <p>How do you like me now</p>
            </div>
        )

   }
    

    return (

        <div className="d-flex flex-column justify-self-center mt-3 ">
            <div className="border border-black p-2 text-center rounded mt-2">
                <p>{session}</p>

            </div>
            <div className="border border-dark mt-5">
                <div className=" border border-dark">
                    <p className="text-center pt-3">User Stats</p>
                </div>
                <div className="">
                    <p>user stats on stuff</p>

                </div>
            </div>
        </div>
    )

}