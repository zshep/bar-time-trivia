export default function makeTriviaSession() {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h3>This is the makeTrivia page!</h3>
            <p>Create a complete Trivia Session choosing up to 5 rounds. Decide what kind of questions you'll use and if you will use hints or not</p>
            <form>
                <label
                    htmlFor="Roundamount">Number of Rounds

                </label>
                <input
                    name="Roundamount"
                    id="Roundamount"
                    type="number"
                    placeholder="How many rounds will this session have?"
                    required>
                    
                </input>
                
                


            </form>


        </div>
    )

}