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


  // function to check if email already exists in db
  async function checkemail(email: string){
    try {
      console.log(email)
      const email_response = await sql<signupForm>`
      SELECT email FROM users where email = ${email}
      `;

      //console.log(email_response.rows[0]);

      if (!email_response.rows[0]) {
        console.log("GOOD NEWS! we can proceed")
        return true

      } else {
        console.log("this email already exists")
        return false
      }

    } catch(error) {
      return {
        message: 'Database Error: Could not access emails', error
      }
    }
  }
  
// function to check if username already exists in db
async function checkusername(username: string){
  try {
    console.log(username)
    let response = await sql`
    SELECT username FROM users WHERE username = ${username}`;

    console.log(response.rows[0]);
    if (!response.rows[0]) {
      return true
    } else {
      console.log('this username already exists');
      return false
    }

  }catch(error){
    message: error
  }


}

  // action to sign up 

  export async function signUp( previousState: unknown, formdata: any) {
    console.log("attempting to get user inputs")
    
    //validate data

    const userData = {
      user_email: formdata.get('email'),
      username: formdata.get('username'),
      user_password: formdata.get('password'),
      password_check: formdata.get('password2')
    }

    console.log(userData);

    // check if passwords match
    if (userData.user_password != userData.password_check) {
      console.log("passwords do not match!");
      return {
        message: 'passwords did not match'
      }
    } else {
      console.log("passwords match");
    }
    console.log('pulling emails from DB');
    // check to see if useralready as email 
     if (!checkemail(userData.user_email)){
      console.log('email already in use');
      return { message: 'the email already exists'}
     }
     //check if username is already in use
     if (!checkusername(userData.username)){
      console.log("username already in use");
      return { message: 'the username already exists'}
     }
     console.log('ready to move forward')
   
  }


// make action to create Session
export async function createsession(prevState: State, formdata: FormData) {

  console.log("create session has been started");

  const joincode = "chickenbutt";

  return joincode;

}




