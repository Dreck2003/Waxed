import {Actions, Datatypes, Task} from '../interface';

type Tasks=Task[] | null;


export const reducerTask = (state:Tasks=[],action:Actions):Tasks =>{

    switch(action.type){

        case Datatypes.GET_TASKS:
            return action.payload;

        case Datatypes.CREATE_TASK:
            return state!.concat(action.payload);

        case Datatypes.DELETE_TASK: 
            console.log(action.payload);
            return state!.filter(task=>task.id !== action.payload.id);

        case Datatypes.TASK_TACH:
            // console.log(action.payload);
            const copyArray=state!;  
            // console.log('state: ',state);
            const index=state!.findIndex(task=>task.id == action.payload.id);
            copyArray.splice(index,1,action.payload);
            // copyArray[index]=action.payload;
            console.log(" new state: ", copyArray);

            return [...copyArray];
        case Datatypes.CLEAN_TASKS:

            return [];

        default:
            return state
    }
}