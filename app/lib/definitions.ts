

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };


  // type for live game sessons

  export type Session = {
    id: string;
    join_code: string;
    trivia_id: string;

  }