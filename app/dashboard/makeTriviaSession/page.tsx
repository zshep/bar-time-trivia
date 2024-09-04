export default function makeTriviaSession() {
    
    
    /*TODO:
        create variables/ states to hold info for the number of rounds */
    
    return (
        <div className="d-flex flex-column text-center">
            <h3>This is the makeTrivia page!</h3>
            <p className="m-5">Create a complete Trivia Session choosing up to 5 rounds. Decide what kind of questions you'll use and if you will use hints or not</p>
            <form>
                <div className="d-flex flex-column align-items-center mb-2">
                    <label
                        htmlFor="Roundamount">Number of Rounds

                    </label>
                    <input
                        className="w-50"
                        name="Roundamount"
                        id="Roundamount"
                        type="number"
                        placeholder="How many rounds will this session have?"
                        required>
                        
                    </input>
                    <label
                        htmlFor="">So Demure

                    </label>
                    <input
                        type="checkbox"
                        name="demure"
                        id="demure"

                        >

                    </input>
                </div>


            </form>


        </div>
    )

}