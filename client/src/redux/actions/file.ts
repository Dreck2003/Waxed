import {Datatypes,Archive,Course} from '../interface';
import {Dispatch} from 'redux'
import localforage from 'localforage';

type Curso = Course | null;


export const createFile = (name: string, cursoId: string, file: string) => {
  return async (dispatch: Dispatch) => {
    try {
      //Buscamos el curso con ese nombre
      const curso: Curso = await localforage.getItem(cursoId);

      //Extraemos los archivos
      const names = curso!.files.map((file: Archive) => file.name);
      console.log(names);

      if (names.includes(name)) {
        alert("The file exist");
      } else {
        const newCurso = {
          ...curso,
          files: curso!.files.concat({
            name: name,
            cursoId: cursoId,
            file: file,
          }),
        };
        //Actualizamos el curso y lo despachamos

        const creado = await localforage.setItem(cursoId, newCurso);
        console.log("creado file: ", creado);

        dispatch({
          type: Datatypes.CREATE_FILE,
          payload: { name: name, cursoId: cursoId, file: file },
        });
      }
    } catch (err) {
      console.error(" course Detail -41- ", err);
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

export const deleteFile=(name:string,courseId:string)=>{

  return async (dispatch: Dispatch) =>{

    try{

      const curso:Curso=await localforage.getItem(courseId);

      const files=curso!.files.filter((file:Archive) => file.name !== name);

      const newCourse={
        ...curso,
        files:files
      }

      await localforage.setItem(courseId,newCourse);

      dispatch({
        type:Datatypes.DELETE_FILE,
        payload:files
      })


    }catch(error){

      console.error('error en delete File- ',error);
    }
  }

}
