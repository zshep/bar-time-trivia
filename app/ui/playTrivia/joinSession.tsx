'use client'



export default function JoinSession() {

    return (

        <form>
            <div className="d-flex flex-column">

                <label>Enter a Join Code</label>
                <input
                    type="text"
                    placeholder="Enter Join Code" />
                <button
                    className="btn border border-dark mt-4 w-25 align-self-center"
                    type="submit"
                >
                    Join</button>
            </div>
        </form>
    )
}