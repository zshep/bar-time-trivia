'use client'

import { useSelectedLayoutSegment } from "next/navigation";

export default function Layout({ 
    children,
    joinSession, 
}: { 
    children: React.ReactNode;
    createSession: React.ReactNode;
    joinSession: React.ReactNode; 
}) {
    // unsure why i have this...apparently it reads as te folder i'll be in....
    const createSessionSegment = useSelectedLayoutSegment('createSession')

    return (
        
            <div className="d-flex flex-row h-100 justify-content-center">
                
                <main className="d-flex flex-column align-content-center border border-dark border-round h-50 w-auto min-w-50vw text-center mt-5">
                    <div className="border border-dark">
                        <p>Bar-Time-Trivia Live</p>
                    </div>
                    <div className="mt-4">
                        
                         {children} 
                    </div>
                </main>
                
            </div>
        
    );
}