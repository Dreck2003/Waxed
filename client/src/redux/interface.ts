export enum Datatypes {
  CREATE_USER,
  GET_USER,
  GET_COURSES,
  CREATE_COURSE,
  CREATE_FILE,
  GET_FILES,
  CREATE_LINK,
  GET_LINKS,
}

export interface Course {
  name: string;
  content: string | null;
  img?: string | null | any;
  // id:number,
  files: string[] | [];
  links: string[] | [];
  lastSeen: Date;
}


export interface Link {
  url: string;
  name: string;
  cursoId: number;
}
export interface Archive {
  name: string;
  userName: string;
  cursoId: number;
  file: any;
}

export interface User {
  name: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
}



export interface CREATE_USER{
    type:Datatypes.CREATE_USER,
    payload:User
}

export interface GET_USER {
  type: Datatypes.GET_USER;
  payload: User;
}


export interface CREATE_COURSE {
  type: Datatypes.CREATE_COURSE;
  payload: Course;
}

export interface GET_COURSES {
  type: Datatypes.GET_COURSES;
  payload: Course[];
}


export interface CREATE_LINK {
  type: Datatypes.CREATE_LINK;
  payload: Link;
}


export interface GET_LINKS {
  type: Datatypes.GET_LINKS;
  payload: Link[];
}

export interface CREATE_FILE {
  type: Datatypes.CREATE_FILE;
  payload: Archive;
}

export interface GET_FILES {
  type: Datatypes.GET_FILES;
  payload: Archive[];
}


export  type Actions= CREATE_USER | GET_USER | GET_FILES | CREATE_FILE | CREATE_COURSE | GET_COURSES 
 | CREATE_LINK | GET_LINKS ;