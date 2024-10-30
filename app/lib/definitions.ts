import NextAuth from "next-auth";


declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;

    };
  }
}


export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
  };

  export type signupForm = {
    id: string;
    username: string;
    email: string;
    password: string;
    
  }


  // type for live game sessons

  export type Session = {
    id: string;
    join_code: string;
    trivia_id: string;

  }