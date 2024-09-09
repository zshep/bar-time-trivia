// page to hold all logic for action items (forms)

'use server';

import { z } from 'zod';


export type State = {
    errors?: {
      joincode?: string[];
      
    };
    message?: string | null;
  };


// make action to create Session
export async function createsession(prevState: State, formdata: FormData) {

  console.log("create session has been started");

  const joincode = "chickenbutt";


  return joincode;

   

}


