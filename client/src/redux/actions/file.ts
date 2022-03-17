import {Datatypes,Archive,Course} from '../interface';
import {Dispatch} from 'redux'
import localforage from 'localforage';

type Curso = Course | null;


export const createFile = (name: string, cursoId: string, file: File) => {


  console.log('create files: ',file)
  const Read=new FileReader();
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

        //Si existe lo leemos y lo guardamos XD:

        Read.readAsDataURL(file);

        Read.addEventListener('load',async(event: any) => {

          const newCurso = {
            ...curso,
            files: curso!.files.concat({
              name: name,
              cursoId: cursoId,
              file: event.target.result,
            }),
          };

          //Actualizamos el curso y lo despachamos
          console.log(event.target.result)
          const creado = await localforage.setItem(cursoId, newCurso);
          console.log("creado file: ", creado);
  
          dispatch({
            type: Datatypes.CREATE_FILE,
            payload: { name: name, cursoId: cursoId, file: event.target.result },
          });

        })

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
      const oldFile=curso!.files.find((file:Archive) => file.name == name)

      const newCourse={
        ...curso,
        files:files
      }

      await localforage.setItem(courseId,newCourse);

      dispatch({
        type:Datatypes.DELETE_FILE,
        payload:oldFile
      })


    }catch(error){

      console.error('error en delete File- ',error);
    }
  }

}

export const getFileData=(courseId:string,name:string) => {

  // const Read=new FileReader();
  console.log('parametros de obtencion de datos: ',courseId,name)

  return async(dispatch:Dispatch)=>{

      try {

        //Buscamos el curso:
        const curso: Curso = await localforage.getItem(courseId);

        //Filtramos por el nombre del archivo:
        console.log('el curso es: ',curso)
        console.log('el archivo es: ');
        const fileToRead = curso!.files.find(
          (file: Archive) => file.name === name
        );

        if(fileToRead){
          console.log('se obtuvo el archivo xd')

          dispatch({
            type: Datatypes.GET_FILE,
            payload: {
              name: fileToRead.name,
              url: fileToRead.file,
            },
          });
          // Read.readAsDataURL(fileToRead.file);

          // Read.addEventListener('load',(event)=>{
            // console.log('evnto de lectura: ',event);


        }else{
          alert('File Not Found')
        }
          
      } catch (error) {
        console.error("update-file: ", error);
      }


  }

}

export const cleanFileData=()=>{

  return {
    type:Datatypes.CLEAN_FILE,
  }

}
