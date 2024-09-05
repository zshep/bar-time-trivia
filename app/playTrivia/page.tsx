import Link from "next/link"
/* Grab */

export default function lobby() {


    return (
        
        <div className="d-flex flex-column">
        <div className="border border-dark rounded w-75">
            
                <Link 
                    key="newSession"
                    href="/playTrivia/createSession.tsx">
                        <p>Create a Session</p>
           
                <p className="text-center">(admin only)</p>
                
                </Link>
        </div>
        <div className="mt-2 mb-2 d-flex flex-column">
            
            <div className="mt-3">
                <button className="btn btn-success">
                        Join Game</button>
            </div>
        </div>
        <div className="mt-3">
            
            <button className="btn btn-success">Want to Play Solo?</button>
        </div>
        <div>

        </div>
    </div>

    )



}