

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
            <div className="d-flex flex-row h-100 justify-content-center">
                
                <main className="d-flex flex-column align-content-center border border-dark border-round h-25 w-25 text-center">
                    <div>
                        <p>Bar-Time-Trivia Live</p>
                    </div>
                    <div>
                        {children}
                    </div>
                </main>
                
            </div>
        
    );
}