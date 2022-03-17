import localforage from "localforage"
import { Dispatch } from "redux"
import {Datatypes, Link,Course} from '../interface';


type Curso=Course | null

export const createLink=(name:string,courseId:string,url:string)=>{

    return async(dispatch: Dispatch)=>{

        try{

            const curso:Curso= await localforage.getItem(courseId);

            const links=curso!.links.map((link:Link)=>link.name );
            
            if(links.includes(name)){
                alert('El link ya existia');
            }else{

                const newCurso={
                    ...curso,
                    links:[...curso!.links, {name,url,courseId}]
                }

                const creado=await localforage.setItem(courseId,newCurso);

                //Despachamos el nuevo link creado
                dispatch({
                    type:Datatypes.CREATE_LINK,
                    payload:{name,url,courseId}
                })
            }

        }catch(error){
            console.error('createLink- ',error)
        }

    }
}

export const updateLink=(name:string,courseId:string)=>{

    return async(dispatch: Dispatch)=>{

        try{

            const curso:Curso= await localforage.getItem(courseId);
            const link=curso!.links.find((link:Link) => link.name===name);
            const links=curso!.links.filter((link:Link) => link.name !== name)

            if(link){

                const newLink:Link={
                    ...link,
                    name:name
                }

                links.push(newLink);

                await localforage.setItem(courseId,{
                    ...curso,
                    links:links
                })

                dispatch({
                    type:Datatypes.UPDATE_LINK,
                    payload:links
                })


            }else{
                alert('no se encontro el link');
                console.error(link)
            }




        }catch(error){
            console.error('updateLink: ',error)
        }

    }

}



export const deleteFile = (name: string, courseId: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const curso: Curso = await localforage.getItem(courseId);


      const links = curso!.links.filter((link: Link) => link.name !== name);

      await localforage.setItem(courseId, {
          ...curso,
          links:links
      });

      dispatch({
        type: Datatypes.DELETE_FILE,
        payload: links,
      });

    } catch (error) {
      console.error("error en delete File- ", error);
    }
  };
};