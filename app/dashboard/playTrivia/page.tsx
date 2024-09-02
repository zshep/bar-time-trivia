export default function playTrivia() {
    return (
        
        <div className="d-flex alignself-center border-black border-round">

            
            <div>
                <div>
                    <button className="btn btn-success">
                        <a href="#/">Create a Session</a>
                    </button>
                </div>
                <div>
                    <label
                        className="ml-2 text-md font-medium">
                            Enter join Code
                    </label>
                    <input 
                        className="border-black ml-2"
                        id="joincode"
                        name="joincode"
                        placeholder="Enter Joincode"                    
                    />
                    <div>
                        <button
                            className="btn btn-success"
                            type="submit"
                            id="joinsubmitbtn"
                            >
                                Join Game</button>
                    </div>
                </div>
                <div>
                    
                    <button className="btn btn-success">Want to Play Solo?</button>
                </div>
                <div>

                </div>
            </div>


        </div>
        

    )

}