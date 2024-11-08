

import Link from 'next/link';
import Image from 'next/image';

import LoginForm from './ui/login-form';



export default function page() {
    return (


        <main className="d-flex justify-content-evenly">

            
                <div className='mt-5 '>
                    
                    <LoginForm></LoginForm>
                </div>
                <div className='d-flex flex-column '>
                    <div className='d-flex flex-column justify-content-space-between text-center'>
                        <div className='d-flex justify-content-center flex-wrap'>
                            
                            <Image
                                src="/images/jedi.jpg"
                                alt="shep with lightsaber"
                                height={400}
                                width={300}
                                />
                        </div>
                    </div>
                </div>

        </main>

    );



}