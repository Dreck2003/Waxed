import axios from "axios";
import localforage from "localforage"
import { Dispatch } from "redux"
import {Datatypes, Link,Course} from '../interface';


type Curso=Course | null;

const URL_LINK = "http://localhost:3001/api/links";

export const createLink=(name:string,courseId:number,url:string)=>{
    console.log('los parametros de la creacion del link son : ',name ,courseId,url)

    return async(dispatch: Dispatch)=>{

        try{
            const {data}= await axios.post(URL_LINK,{nameLink:name,courseId:courseId,url:url});
            console.log('la respuesta es: ',data)

            if(data.error) return console.log('error CreateLink: ',data.error);
            
            dispatch({
                type:Datatypes.CREATE_LINK,
                payload:data.content
            })

        }catch(error){
            console.error('createLink- ',error)
        }

    }
}

// export const updateLink=(name:string,courseId:string)=>{

//     return async(dispatch: Dispatch)=>{

//         try{

//             const curso:Curso= await localforage.getItem(courseId);
//             const link=curso!.links.find((link:Link) => link.name===name);
//             const links=curso!.links.filter((link:Link) => link.name !== name)

//             if(link){

//                 const newLink:Link={
//                     ...link,
//                     name:name
//                 }

//                 links.push(newLink);

//                 await localforage.setItem(courseId,{
//                     ...curso,
//                     links:links
//                 })

//                 dispatch({
//                     type:Datatypes.UPDATE_LINK,
//                     payload:links
//                 })


//             }else{
//                 alert('no se encontro el link');
//                 console.error(link)
//             }




//         }catch(error){
//             console.error('updateLink: ',error)
//         }

//     }

// }



export const deleteLink = (id:number) => {
    // console.log('los links se van a borrar wajajwaja');
  return async (dispatch: Dispatch) => {
    try {
      
        const {data}=await axios.delete(URL_LINK,{data:{idLink:id}})

        if(data.error) return console.log('error DeleteLink: ',data.error);

      dispatch({
        type: Datatypes.DELETE_LINK,
        payload: data.content,
      });

        console.log("los links se despacharon");


    } catch (error) {
      console.error("error en delete File- ", error);
    }
  };
};