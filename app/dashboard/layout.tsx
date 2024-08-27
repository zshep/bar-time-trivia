
export default function Layout({children}: {children: React.ReactNode }){
    return(
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        
            <div>
                Nav bar!
            </div>
            <div>{children}</div>


        </div>


    );


}