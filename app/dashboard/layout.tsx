import Headbanner from "../ui/headbanner";
import Sidenav from "../ui/sidenav";



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
            <div className="d-flex flex-row h-100">
                <div className="d-flex flex-column align-items-center w-25 ">
                    <Sidenav />
                </div>
                <main className="d-flex justify-content-center">
                    {children}
                </main>
                
            </div>
        
    );


}