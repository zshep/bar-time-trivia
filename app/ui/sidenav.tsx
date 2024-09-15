'use client'

import Link from "next/link"


export default function SideNav() {
    return(
        <div className="border border-dark h-100 w-100">
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


<<<<<<< HEAD
                <div className="d-flex justify-content-center">
                   <form>
                        <button className="button btn-danger border border-danger">
                            <div>Sign Out</div>
                        </button>

                    </form>
=======
                <div>
                    <ul>
                        
                            <Link className="btn" href="/logout">Log Out</Link>
                        
                    </ul>
>>>>>>> parent of 2f90938 (just messed with more styling...need to get to actual logic to run games)
                </div>

            </div>


    )


}

