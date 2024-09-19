// page to hold all logic for action items (forms)

'use server';

import { AuthError } from 'next-auth';
import { z } from 'zod';


export type State = {
    errors?: {
      user_email?: string[];
      user_password?: string[];
      password_check?: string[];

    };
    message?: string | null;
  };


  // action to sign up 

  export async function signUp(formdata: FormData) {

    console.log("attempting to get user inputs")
    const user_email = formdata.get('email');
    const user_password = formdata.get('password');
    const password_check = formdata.get('password2');


    console.log(user_email);
    console.log(user_password);
    console.log(password_check);

    const user = { user_email, user_password, password_check}

    return user

  }


// make action to create Session
export async function createsession(prevState: State, formdata: FormData) {

  console.log("create session has been started");

  const joincode = "chickenbutt";

  return joincode;

}




