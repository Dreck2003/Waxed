import {Datatypes,Archive,Course} from '../interface';
import {Dispatch} from 'redux'
import localforage from 'localforage';
import axios from 'axios';

type Curso = Course | null;

const URL_FILE = "http://localhost:3001/api/files";



export const createFile = (formData:any) => {

  return async (dispatch: Dispatch) => {
    
    try {
      const response = await fetch(URL_FILE, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if(data.error) return console.log('createFile: ',data.error);


      dispatch({
        type: Datatypes.CREATE_FILE,
        payload: data.content,
      });

      console.log(data);
      // dispatch(createFile(data.nameFile));
    } catch (e) {
      console.log(e);
    }
  };
};


export const deleteFile=(fileId:number)=>{

  return async (dispatch: Dispatch) =>{

    try{

        const { data } = await axios.delete(URL_FILE, {
          data: { fileId: Number(fileId) },
        });


      if(data.error) return console.log('deleteFIle: ',data.error)

      dispatch({
        type:Datatypes.DELETE_FILE,
        payload:data.content
      })


    }catch(error){

      console.error('error en delete File- ',error);

    }
  }

}

export const getFileData=(id:string) => {

  console.log('parametros de obtencion de datos: ',id);

  return {
    type:Datatypes.GET_FILE,
    payload:Number(id)
  }
}

export const cleanFileData=()=>{

  return {
    type:Datatypes.CLEAN_FILE,
  }

}
