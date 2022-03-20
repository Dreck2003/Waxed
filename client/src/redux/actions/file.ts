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

export const updateFile=(name:string,courseId:string)=>{

    return async(dispatch:Dispatch)=>{

        try{
            //Buscamos el curso:
            const curso:Curso= await localforage.getItem(courseId);

            //Filtramos por el nombre del archivo:
            const fileToUpdate=curso!.files.find((file:Archive)=>file.name === name);
            const archivos=curso!.files.filter((file:Archive)=>file.name !== name);


            if(fileToUpdate){

              const file: Archive = {
                ...fileToUpdate,
                name: name,
              };

              archivos.push(file);

              const newCurso = {
                ...curso,
                files: archivos,
              };
              console.log(newCurso);

              await localforage.setItem(name, newCurso);

              dispatch({
                type: Datatypes.UPDATE_FILE,
                payload: archivos,
              });
            }else{
              
              alert('no se encontro el archivo ');
              console.error(fileToUpdate);                
            }

        }catch(error){
            console.error('update-file: ',error)
        }




    }




}

export const deleteFile=(nameFile:string,courseId:string)=>{

  return async (dispatch: Dispatch) =>{

    try{

        const {data}=await axios.delete(URL_FILE,{data:{nameFile,courseId}})


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

export const getFileData=(name:string) => {

  // const Read=new FileReader();
  console.log('parametros de obtencion de datos: ',name);

  return {
    type:Datatypes.GET_FILE,
    payload:name
  }
}

export const cleanFileData=()=>{

  return {
    type:Datatypes.CLEAN_FILE,
  }

}
