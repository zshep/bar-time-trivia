import Link from 'next/link';
import Image from 'next/image';

import LoginForm from './ui/login-form';



export default function page() {
    return (


        <main className="d-flex justify-content-evenly">

            
                <div className='mt-5'>
                    
                    <LoginForm></LoginForm>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-column justify-content-space-between'>
                        <Link
                            href="/dashboard"
                        >
                            Welcome to the Dashboard
                        </Link>
                        <div className='d-flex justify-content-center'>
                            <h2>Logo!</h2>
                        </div>
                    </div>
                </div>



            





        </main>

    );



}