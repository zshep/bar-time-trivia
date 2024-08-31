'use client';


export default function LoginForm() {

    /* TODO: create authentication and error display */

    return (

        <div className="d-flex justify-content-center flex-column border border-black rounded">
            <div className="">
                <form>
                    <p className="text-center">Please Log In</p>
                    <div>
                        <label className="ml-3 text-xs font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border ml-2"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            autoFocus

                        />
                    </div>
                    <div className="text-black-900 mr-2 ml-3">
                        <label
                            className="mr-2"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border ml-2"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            minLength={6}
                        />
                    </div>
                </form>
                <div className="d-flex justify-content-center mb-2 mt-2">
                    <button
                        type="submit"
                        className="btn btn-outline-success"
                        id="button"
                        name="loginBTN">
                        Log In
                    </button>
                </div>
            </div>

            <div className="d-flex justify-content-center m-1">
                <button type="button" className="btn btn-outline-dark">Need a log in? Sign up today!</button>
            </div>
        </div>


    )
}