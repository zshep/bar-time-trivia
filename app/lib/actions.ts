// page to hold all logic for action items (forms)

'use server';

import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { string, z } from 'zod';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { signupForm } from './definitions';


export type State = {
    errors?: {
      user_email?: string[];
      user_password?: string[];
      password_check?: string[];
    };
    message?: string | null;
  };


  // action to sign up 

  export async function signUp( previousState: unknown, formdata: any) {
    //console.log("attempting to get user inputs")
    
    //validate data

    const userData = {
      user_email: formdata.get('email'),
      username: formdata.get('username'),
      user_password: formdata.get('password'),
      password_check: formdata.get('password2')
    }

    console.log(userData);
    let user_email = userData.user_email;

    // check if passwords match
    if (userData.user_password != userData.password_check) {
      console.log("passwords do not match!");

      revalidatePath('/signup');
      redirect('/signup');
    }

    // check to see if useralready as email 
    try {
      const email_response = await sql<signupForm>`
      SELECT email FROM users where email = ${userData.user_email}
      `;

      console.log(email_response);

      if (!email_response) {
        console.log("GOOD NEWS! we can proceed")

      } else {
        console.log("this email already exists")

      
        return {
          message: 'did not work'
        }

      }

    } catch(error) {
      return {
        message: 'Database Error: Could not access usernames',
      }

    }

    //check if username is already in use

    try {


    } catch (error){
      return {
        message: 'Database Error: Failed to create Account',
      }

    }
 
  }


// make action to create Session
export async function createsession(prevState: State, formdata: FormData) {

  console.log("create session has been started");

  const joincode = "chickenbutt";

  return joincode;

}




