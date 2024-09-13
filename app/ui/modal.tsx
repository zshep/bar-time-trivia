'use client'

import { useRouter } from "next/navigation"

export function Modal( { children }: {children: React.ReactNode}) {

    const router = useRouter()

    return(
        <div className="">
            <button 
            className="mb-3 btn border border-danger btn-danger text-black"
            onClick={() => {
                router.back()
            }}>
                Return
            </button>
            <div>{children}</div>
        </div>
    )
}