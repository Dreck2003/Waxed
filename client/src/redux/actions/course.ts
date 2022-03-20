import { Dispatch } from "redux";
import { Course, Datatypes } from "../interface";
import LocalForage from "localforage";
import axios from 'axios';

const URL = "http://localhost:3001/api/courses";


export const createCourse = (name: string, curso: any) => {

  return async (dispatch: Dispatch) => {

    try{

      const {data}= await axios({
        method:'POST',
        url:URL,
        data:curso,
        headers:{ "Content-Type": "multipart/form-data" }

      })
      if (data.error)
        return console.error("existe error createCourse: ", data.error);

      dispatch({
        type: Datatypes.CREATE_COURSE,
        payload: data.content,
      });


    }catch(error){
      console.error('createCourseAction: ',error)
    }
    

    

  };
};

export const getCourses = () => {
  
    return async (dispatch: Dispatch) => {

      try{

        const {data}=await axios(URL);

        dispatch({
          type:Datatypes.GET_COURSES,
          payload:data.content,
        })

      }catch(error){
        console.error('getCourses: ',error)
      }




      



    // try {
    //   const courses: Course[] = [];

    //   await LocalForage.iterate((valor, key) => {
    //     courses.push(valor as Course);
    //   });

    //   dispatch({
    //     type: Datatypes.GET_COURSES,
    //     payload: courses,
    //   });

    // } catch (err) {

    //   console.error("38- ", err);
    // }
  };
};
