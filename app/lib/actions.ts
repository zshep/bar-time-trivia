// page to hold all logic for action items (forms)

'use server';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { string, z } from 'zod';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';
import { signupForm } from './definitions';
import { db } from '@vercel/postgres';
import { User } from './definitions'
import { signIn } from 'next-auth/react';


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
    // console.log("attempting to get user inputs")
       
    //TODO: git validate data

    const userData = {
      user_email: formdata.get('email'),
      username: formdata.get('username'),
      user_password: formdata.get('password'),
      password_check: formdata.get('password2')
    }

    // check if passwords match
    if (userData.user_password != userData.password_check) {
      console.log("passwords do not match!");
      return {
        message: 'passwords did not match'
      }
    } 

    console.log('pulling emails from DB');
    
    // check to see if useralready as email 
    
    try {
      
      const email_response = await sql<signupForm>`
      SELECT email FROM users where email = ${userData.user_email}
      `;

      //console.log(email_response.rows[0]);

      if (!email_response.rows[0]) {
        console.log("GOOD NEWS! we can proceed")

      } else {
        console.log("this email already exists")
        return {
          message: 'Email already exists'
        };
      }

    } catch(error) {
      return {
        message: 'Database Error: Could not access emails', error
      };
    }
           
    
    // checking to see if username is free
    
    try {
      
      let response = await sql`
      SELECT username FROM users WHERE username = ${userData.username}`;
  
      // console.log(response.rows[0]);
      if (response.rows[0]) {
        console.log("this username already exists");
        return {
          message: "username already exists"
        }
      } else {
        console.log('we can add this user');
      }
  
    }catch(error){
      message: error
    }
    
    console.log("adding user to db")

    try {
      const hashedPassword = await bcrypt.hash(userData.user_password, 10)

      await sql`
        INSERT INTO users (username, email, password)
        VALUES (${userData.username}, ${userData.user_email}, ${hashedPassword})
      `;

      await sql `COMMIT`;
      console.log("user should have been added")
      


    } catch(error) {
      console.error("something fucked up", error)
    }
    
    redirect('/');

  }

  export async function logIn(previousState: unknown, formdata: any) {
    // log in details

    const data = {
      email: formdata.get('email'),
      password: formdata.get('password')
    }

    console.log(data);

    // look for user using email
    try {
      console.log('the email should be:', data.email);

      const user = await sql<User>`
        SELECT * FROM users WHERE email = ${data.email}`;

        if (!user) {
          console.log('this user does not exist') ;

          redirect('/');
        }
        console.log(user)
        console.log(user.fields)
    
      
    }catch(error){
      console.log("could not look up user", error)
    }

  }

  //authentication 
  export async function authenticate(
    prevState: string | undefined,
    formData: any,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }


export async function createsession(prevState: State, formdata: FormData) {

  console.log("create session has been started");

  const joincode = "chickenbutt";

  return joincode;

}




