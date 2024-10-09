'use client';

import Link from "next/link";
import { authenticate } from "../lib/actions";
import { useActionState } from 'react';
import { useFormState } from "react-dom";




export default function LoginForm() {

   

    const [errorMessage, formAction, isPending] = useFormState(
        authenticate,
        undefined,
    );

    return (
        <>
            <p className="text-center">Please Log In</p>
            <div className="d-flex justify-content-center flex-column border border-black rounded m-2">
                <div className="mt-2 mr-2 ml-2">
                    <form action={formAction}>
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
                                    minLength={3}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center mb-2 mt-2">
                            <button
                                aria-disabled={isPending}
                                type="submit"
                                className="btn btn-outline-success w-75 "
                                id="button"
                                name="loginBTN">
                                Log In
                            </button>
                            <div
                                className="d-flex flex-wrap"
                                aria-live="polite"
                                aria-atomic="true"
                            >
                                {errorMessage && (
                                    <>
                                        <p className="mt-2 text-md text-danger  font-weight-bold">{errorMessage}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </form>

                </div>

                <div className="d-flex justify-content-center m-1 mb-2">
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