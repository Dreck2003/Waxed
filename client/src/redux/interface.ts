export enum Datatypes {
  CREATE_USER,
  GET_USER,
  GET_COURSES,
  CREATE_COURSE,
  CREATE_FILE,
  UPDATE_FILE,
  DELETE_FILE,
  CLEAN_FILE,
  GET_FILE,
  CREATE_LINK,
  UPDATE_LINK,
  DELETE_LINK,
  FIND_COURSE,
}

export interface Course {
  name: string;
  content: string | null;
  img?: string | null | any;
  // id:number,
  files: Archive[]| null;
  links: Link[] | [] | null;
}


export interface Link {
  url: string;
  name: string;
  cursoId: string;
}
export interface Archive {
  name: string;
  cursoId: string;
  url:string
}

export interface User {
  name: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
}

export interface CourseDetail{
  links:Link[],
  files:Archive[],
  seeFile:{
    name:string,
    url:string
  }
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

export interface FIND_COURSE {
  type: Datatypes.FIND_COURSE;
  payload: CourseDetail;
}
export interface GET_COURSES {
  type: Datatypes.GET_COURSES;
  payload: Course[];
}


export interface CREATE_LINK {
  type: Datatypes.CREATE_LINK;
  payload: Link;
}

export interface UPDATE_LINK{
  type: Datatypes.UPDATE_LINK;
  payload: Link[];
}

export interface DELETE_LINK {
  type: Datatypes.DELETE_LINK;
  payload: Link[];
}





//==============================
export interface CREATE_FILE {
  type: Datatypes.CREATE_FILE;
  payload: Archive;
}

export interface UPDATE_FILES{
  type:Datatypes.UPDATE_FILE,
  payload:Archive[]
}
export interface DELETE_FILE{
  type:Datatypes.DELETE_FILE,
  payload:Archive
}
export interface GET_FILE{
  type:Datatypes.GET_FILE,
  payload:string
}

export interface CLEAN_FILE {
  type: Datatypes.CLEAN_FILE;
}

//================================




export  type Actions =
  | CREATE_USER
  | GET_USER
  | CLEAN_FILE
  | CREATE_FILE
  | GET_FILE
  | UPDATE_FILES
  | DELETE_FILE
  | CREATE_COURSE
  | GET_COURSES
  | CREATE_LINK
  | DELETE_LINK
  | UPDATE_LINK
  | FIND_COURSE;