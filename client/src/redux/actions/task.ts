import { Datatypes } from "../interface";

import axios from "axios";
import { Dispatch } from "redux";
import Swal from 'sweetalert';

const URL_TASK = "http://localhost:3001/api/tasks";


export const getTasks = (userName:string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get(URL_TASK+'/'+userName);

      if (data.error) throw new Error("existe un error en getTasks");

      console.log('tasks: ',data.content);
      dispatch({
        type: Datatypes.GET_TASKS,
        payload: data.content,
      });
    } catch (error) {
      console.error("getTasks: ", error);
    }
  };
};

export const createTask = ( text : string,userName:string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.post(URL_TASK, { text,userName });

      if (data.error) throw new Error("createTask");

      console.log(data.content);
      dispatch({
        type: Datatypes.CREATE_TASK,
        payload: data.content,
      });
      Swal({
        title:'Task created',
        icon:'success'
      })
    } catch (error) {
      Swal({
        title: "Oops an error occurred",
        icon:'warning'
      });
      console.error("error en createTask: ", error);
    }
  };
};

export const deleteTask=(id:number) => {

  return async(dispatch:Dispatch)=>{

    try{

      const {data}=await axios.delete(URL_TASK+`/${id}`);
    
          if(data.error) {
            Swal({
              title:'Opps an error ocurred',
              icon:'error'
            }) 
            throw new Error('Delete Task');
          }
          console.log('task deleted: ',data.content);
          dispatch({
            type:Datatypes.DELETE_TASK,
            payload:data.content
          })
          Swal({
            title:'Task Deleted',
            icon:'success'
          })
        

    }catch(error){
      Swal({
        title:'Oops an error ocurred',
        icon:'error'
      })
      console.log('error deletTask: ',error);
    }

  }

}

export const tachTask=(id:number,tach:boolean)=>{

  return async(dispatch: Dispatch)=>{

    try{

      const {data}=await axios.put(URL_TASK,{id,tach});

      if(data.error) {
        Swal({
          title:'Opps an error ocurred',
          icon:'error'
        }) 
        throw new Error('error tachTask');
      }

      dispatch({
        type:Datatypes.TASK_TACH,
        payload:data.content
      })
      Swal({
        title:'Task completed',
        icon:'success'
      })

    }catch(error){
      Swal({
        title:'Oops an error ocurred',
        icon:'error'
      })
      console.log('eror tachTask');
    }
  }

}

export const cleanTasks=()=>{

  return {
    type:Datatypes.CLEAN_TASKS
  }

}