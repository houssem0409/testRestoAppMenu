export interface User {
    id: number;
    name: string;
    lastname: string;
    email: String;
    password : String;
    age : number;
  }
  export type UserContextType = {
    users: user[];
    saveUser: (user: User) => void;
    updateUser: (id: number) => void;
  };