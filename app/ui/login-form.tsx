'use client';

import Link from "next/link";
import { useActionState } from 'react';



export default function LoginForm() {

    /* TODO: create authentication and error display */

    return (
        <>
            <p className="text-center">Please Log In</p>
            <div className="d-flex justify-content-center flex-column border border-black rounded m-2">
                <div className="">
                    <form>
                        <div className="d-flex flex-column justify-content-space-between">
                            <div className="d-flex flex-row justify-content-evenly mb-2">
                                <label className="ml-3 text-xs font-medium" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="border ml-2"
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    required
                                    autoFocus

                                />
                            </div>
                            <div className="d-flex flex-row justify-content-space-evenly">
                                <label
                                    className="ml-3 text-xs font-medium"
                                    htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="border ml-2"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    required
                                    minLength={6}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="d-flex justify-content-center mb-2 mt-4">
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
                    <Link 
                        type="button" 
                        className="btn btn-outline-dark"
                        href="/signup">Need a log in? Sign up today!
                    </Link>
                </div>
            </div>
        </>

    )
}