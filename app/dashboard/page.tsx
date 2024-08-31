export default function page() {
    return (

        <div className="d-flex flex-row h-100">
            <div className="border border-dark h-100">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard/makeTriviaSession">Make Trivia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard/playTrivia">Play Trivia</a>
                    </li>
                    
                </ul>

            </div>

            <div>
                <p>Soon they will notice my true power</p>
                <div>
                    <p>something else will be put here</p>
                
                
                </div>
                <div>
                    {/* import component here */}
                </div>


            </div>

        </div>

    );


}