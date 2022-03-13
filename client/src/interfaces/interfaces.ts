export interface Course {
  name: string;
  content: string | null;
  img?: string | null;
  // id:number,
  files: string[] | [];
  links: string[] | [];
  lastSeen:Date;
}


export interface Link{
    url:string,
    name:string
    cursoId:number
}
export interface Archive {
    name: string;
    userName: string;
    cursoId: number;
    file:any
}

export interface User{
    name:string,
    lastName:string,
    userName:string
}

export interface Courses{
    courses:Course[]
}

export interface ProviderUser{
    User_info:User | null,
    user:Boolean,
    changeUser:(name:string,lastName:string,userName:string)=>void | (()=>void)
}