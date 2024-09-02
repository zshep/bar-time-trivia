'use client'

export default function SideNav() {
    return(
        <div className="border border-dark h-100">
                <ul className="nav flex-column">
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


                <div>
                    <li>
                        <a className="btn" href="/logout">Log Out</a>
                    </li>
                </div>

            </div>


    )


}

