export interface Course{
    name:string,
    content:string,
    img?:string,
    userName:string
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