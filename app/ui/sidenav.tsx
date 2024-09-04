'use client'

export default function SideNav() {
    return(
        <div className="border border-dark h-100 w-100">
                <div>
                    <ul className="nav flex-column text-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="/dashboard">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/makeTriviaSession">Make Trivia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/playTrivia">Play Trivia</a>
                        </li>
                        
                    </ul>
                </div>


                <div className="text-center ">
                    <ul>
                        
                            <a className="btn" href="/logout">Log Out</a>
                        
                    </ul>
                </div>

            </div>


    )


}

