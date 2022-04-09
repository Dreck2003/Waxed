import {Datatypes,Archive,Course} from '../interface';
import {Dispatch} from 'redux'
import localforage from 'localforage';
import axios from 'axios';
import Swal from 'sweetalert';

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
      

      if(data.error){
        alert(data.error);
        Swal({
          title:'Opps an error ocurred',
          icon:'error'
        });

        return console.log('createFile: ',data.error);
      } 

      dispatch({
        type: Datatypes.CREATE_FILE,
        payload: data.content,
      });
      Swal({
        title:'Created file',
        icon:'success'
      })

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

      Swal({
        title:'Are you sure?',
        text:'Once deleted , you will not be able recover this file!',
        icon:'warning',
        buttons:['No','Yes'],
        dangerMode:true
      })
      .then(async(deleted)=>{
        if(deleted){
          
            const { data } = await axios.delete(URL_FILE, {
              data: { fileId: Number(fileId) },
            });
  
          if(data.error){
            Swal({
              title:'File deletion failed',
              icon:'warning'
            });
            return console.log('deleteFIle: ',data.error)
          } 
      
          dispatch({
            type:Datatypes.DELETE_FILE,
            payload:data.content
          })
          Swal({
            title:'Deleted file',
            icon:'success'
          })
        }
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
