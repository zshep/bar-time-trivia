import Link from "next/link"
/* Grab create session form */

export default function lobby() {


    return (
        
        <div className="d-flex flex-column justify-content-center">
        <div className="border border-dark rounded w-auto bg-dark text-white align-self-center  ">
            
                 <Link 
                    key="newSession"
                    href="/dashboard/playTrivia/createSession">
                        <p>Create a Session</p>
           
                <p className="text-center">(admin only)</p>
                
                </Link> 
        </div>
        <div className="mt-2 mb-2 d-flex flex-column">
            
            <div className="mt-3 border border-dark rounded w-auto bg-dark text-white align-self-center">
                <Link
                    key="joinSession"
                    href="/dashboard/playTrivia/joinSession">
                        <p>Join a Session</p>
                
                </Link>
            </div>
        </div>
        <div className="mt-3 border border-dark rounded w-auto bg-dark text-white align-self-center">
            
            <Link
                key="solo"
                href="/dashboard/playtrivia/solo">
                    <p> Play Solo</p>
            
            </Link>
            
        </div>
        <div>

        </div>
    </div>

    )



}