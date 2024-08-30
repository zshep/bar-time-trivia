'use client';


export default function LoginForm (){

    /* TODO: create authentication and error display */

    return(
        <form className="">    
            <div className="border">
                <p className="">Please Log In

                </p>
                <div className="w-full">
                    <div>
                        <label className="mb-3 block text-xs font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="peer block w-full rounded-md border border-gray-900"
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
                <button
                     
                    id="button"
                    name="loginBTN">
                        Log In
                </button>
            </div>  
        </form>
    )
}