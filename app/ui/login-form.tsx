'use client';


export default function LoginForm (){

    /* TODO: create authentication and error display */

    return(
       
        <div className="d-flex justify-content-center flex-direction-colum border border-black rounded">    
            <form className="">
                <div>
                    <p>Please Log In</p>
                    <div>
                        <label className="mb-3 block text-xs font-medium" htmlFor="email">
                            Email 
                        </label>
                        <input
                            className="border"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                            autoFocus
                            
                        />
                    </div>
                    <div className="mt-3 text-gray-900">
                        <label 
                            className="mb-3 mt-5 block text-xs font-medium" 
                            htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="peer block w-full rounded-md border-gray-200" 
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            minLength={6} 
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <button
                        type="submit"
                        className="btn btn-outline-success"
                        id="button"
                        name="loginBTN">
                            Log In
                    </button>
                </div>
            </form>  
        
            <div className="d-flex justify-content-center m-1">
            <button type="button" className="btn btn-outline-dark">Need a log in? Sign up today!</button>
            </div>
        </div>
        
        
    )
}