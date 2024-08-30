import Link from 'next/link';
import Image from 'next/image';
import Headbanner from './ui/headbanner';
import LoginForm from './ui/login-form';



export default function page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            
            <div className='col'>
                <div>
                    <div>
                        <p>Bar Trivia Fun!</p>
                    </div>
                    <LoginForm></LoginForm>
                </div>
                <div>
                    <div>
                        <Link
                            href="/dashboard"
                        >
                            <span>Welcome to the Dashboard</span>
                        </Link>
                        Logo!
                    </div>
                </div>



            </div>





        </main>

    );



}