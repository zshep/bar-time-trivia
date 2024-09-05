

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
            <div className="d-flex flex-row h-100 justify-content-center">
                
                <main className="d-flex flex-column align-content-center border border-dark border-round h-50 w-25 text-center mt-5">
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