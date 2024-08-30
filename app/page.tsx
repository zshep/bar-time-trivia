import Link from 'next/link';
import Image from 'next/image';

import LoginForm from './ui/login-form';



export default function page() {
    return (
        
        
        <main className="d-flex justify-content-center">
            
            <div className='d-flex'>
                <div>
                    <div className="justify-content-center">
                        <p>Bar Trivia Fun!</p>
                    </div>
                    <LoginForm></LoginForm>
                </div>
                <div>
                    <div>
                        <Link
                            href="/dashboard"
                        >
                            Welcome to the Dashboard
                        </Link>
                        Logo!
                    </div>
                </div>



            </div>





        </main>

    );



}