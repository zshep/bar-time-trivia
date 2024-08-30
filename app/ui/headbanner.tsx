'use client';

import Link from 'next/link';
import styles from '@/app/ui/home.module.css';


export default function Headbanner(){
    return(
       
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center">
      <Link className="navbar-brand" href="#">
          Bar Time Trivia!
        </Link>
                
      </div>
    </nav>
    )    
}