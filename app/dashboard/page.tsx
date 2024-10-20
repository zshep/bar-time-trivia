import Image from "next/image";
import { fetchUserInfo } from "../lib/actions";
import { useSession } from "next-auth/react";

//grab info from users such as username, stats, etc.




export default function page() {
  
    
    

    return (


        <div className="d-flex flex-row flex-stretch w-100 justify-content-around">

            <div className="d-flex flex-column justify-self-center mt-3 w-25">
                <div className="border border-black p-2 text-center rounded mt-2">
                    <p>User Name</p>

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
            <div className="d-flex flex-column mt-3">
            <div className="align-self-center">
                    <Image
                        className="rounded-circle"
                        src="/jedi.jpg"
                        alt="shep with lightsaber"
                        height={250}
                        width={250}
                    />
                </div>
                <div className="mt-4">
                    <p> a users list of teams??</p>
                </div>
            </div>
        </div>

    );


}