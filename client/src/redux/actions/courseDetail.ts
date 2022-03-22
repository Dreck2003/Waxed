import axios from "axios";
import localforage from "localforage";
import { Dispatch } from "redux";
import { Datatypes, Course, Archive } from "../interface";

type Curso = Course | null;

const URL_COURSE = "http://localhost:3001/api/courses/";


export const getCourseDetail = (id: string) => {
  return async (dispatch: Dispatch) => {

    try{


      const {data}=await axios.get(URL_COURSE+id);

      if(data.error) return console.log('error ec courseDeatil: ',data.error);


      dispatch({
      type: Datatypes.FIND_COURSE,
      payload: {
        files: data.content.archive,
        links: data.content.link,
      },
    });


    }catch(error){
      console.log('getCourseDetail: ',error);
     
    }











  };
};



export const viewSidebar = (tipo: string) => {
  return {
    type: Datatypes.CHANGE_VIEW,
    payload:tipo
  };
};
