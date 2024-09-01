import Headbanner from "../ui/headbanner";
import Sidenav from "../ui/sidenav";



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="d-flex flex-row">
                <div className="md:w-64">
                    <Sidenav />
                </div>
                <div className="d-flex flex-grow justify-content-center">
                    {children}
                </div>
                
            </div>
        </div>
    );


}