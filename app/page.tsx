import Link from 'next/link';
import Image from 'next/image';

export default function page(){
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div>Bar Time Trivia</div>
            <Link
            href="/dashboard"
            >
                <span>Come to the Dashboard</span>
            </Link>



        </main>

    );



}