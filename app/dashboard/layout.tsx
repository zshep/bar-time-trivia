import Headbanner from "../ui/headbanner";
import Sidenav from "../ui/sidenav";



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        
            <div className="d-flex flex-row">
                <div className="md:w-64">
                    <Sidenav />
                </div>
                <main className="d-flex flex-grow">
                    {children}
                </main>
                
            </div>
        
    );


}