'use client';


export default function LoginForm (){

    /* TODO: create authentication and error display */

    return(
        <form className="space-y-3">    
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h2 className="mb-3 text-2xl">Please Log In

                </h2>
                <div className="w-full">
                    <div>
                        <label className="mb-3 blox text-xs font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="peer block w-full rounded-md border border-gray-200"
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