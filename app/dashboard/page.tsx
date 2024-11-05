import Image from "next/image";
import { fetchUserInfo } from "../lib/actions";
import UserInfo  from "../ui/userInfo";

//grab info from users such as username, stats, etc.




export default function page() {
  
   
    

    return (


        <div className="d-flex flex-row flex-stretch w-100 justify-content-around">
        
            
            
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