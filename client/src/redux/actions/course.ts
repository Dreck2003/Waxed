import { Dispatch } from "redux";
import { Datatypes } from "../interface";
import axios from 'axios';
import swal from 'sweetalert';
const URL = "http://localhost:3001/api/courses";


export const createCourse = ( curso: any,token:string)=> {

  return async (dispatch: Dispatch) => {

    try{
      console.log(curso);
      console.log("envio de datos!!");

      const {data}= await axios({
        method:'POST',
        url:URL,
        data:curso,
        headers:{ 
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${token}`
        }

      })
      if (data.error)
        return console.log("existe error createCourse: ", data.error);
      console.log(data.content)
      dispatch({
        type: Datatypes.CREATE_COURSE,
        payload: data.content,
      });
      swal('Hello World');

    }catch(error:any){
      console.log(error.message)
      console.log('createCourseAction: ',error);
      swal("Spacy not create");

    }
  };
};

export const getCourses = (user:string) => {
  
    return async (dispatch: Dispatch) => {

      try{

        const {data}=await axios(`${URL}/${user}`);
        console.log(data);
        dispatch({
          type:Datatypes.GET_COURSES,
          payload:data.content,
        })

      }catch(error){
        console.error('getCourses: ',error)
      }


  };
};

export const deleteCourse=(id:number,token:string) => {

  return async(dispatch:Dispatch)=>{

    try{
      const config= {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const {data}=await axios.delete(URL+`/delete/${id}`,config);

      if(data.error)throw new Error(data.error);

      dispatch({
        type:Datatypes.DELETE_COURSE,
        payload:data.content
      })


    }catch(error){
      console.log('error en dele ecourseeeeeeeeeeee: ',error);
    }

  }

}
