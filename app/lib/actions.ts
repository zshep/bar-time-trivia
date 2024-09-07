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
export async function createSession(prevState: State, formdata: FormData) {



}


