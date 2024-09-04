export default function playTrivia() {
    return (
        
        <div className="d-flex flex-column  m-2 border-black border-round">

            
            <div className="d-flex flex-column">
                <div>
                    <button className="btn btn-success">
                        <a href="#/">Create a Session</a>
                    </button>
                </div>
                <div className="mt-2 mb-2 d-flex flex-column">
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
                    <div className="mt-3">
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