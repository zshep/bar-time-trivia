'use client'

import Link from "next/link"

export default function SideNav() {
    return(
        <div className="d-flex flex-column justify-content-between border border-dark h-100 w-100">
                <div>
                    <ul className="nav flex-column text-center">
                        <li className="nav-item">
                            <Link className="nav-link active" href="/dashboard">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/dashboard/makeTriviaSession">Make Trivia</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/dashboard/playTrivia">Play Trivia</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/dashboard/manageTeams">Manage Teams
                            </Link>

                        </li>
                        
                    </ul>
                </div>


                <div className="d-flex justify-content-center">
                    <ul>
                        
                            <Link className="btn border border-dark" href="/logout">Log Out</Link>
                        
                    </ul>
                </div>

            </div>


    )


}

