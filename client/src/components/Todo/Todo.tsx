import { useState,useEffect } from "react";
import { Aside, Content, Header, List, Modal, TodoBar } from "./StyTodo";
import {createTask, deleteTask, getTasks, tachTask} from '../../redux/actions/task';
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import Swal from "sweetalert";


interface Style{
    display: string,
}

const desplegable: Style={
    display: "flex",
}
const close:Style={
    display: "none",
    
}

const Todo=()=>{

    const [vist,setVist]=useState<boolean>(false);
    const dispatch=useDispatch();
    const tasks=useSelector((state:State)=>state.tasks);
    const user=useSelector((state:State)=>state.user)

    useEffect(() =>{

        console.log('las tareas con : ',tasks)
        if(tasks && !tasks.length){
            dispatch(getTasks(user!.userName));
        }
    },[]);

    const sendTask=(event:any)=>{
        event.preventDefault();

        if(!(event.target.text.value)){
            Swal({
                title:'Empty field',
                icon:'error'
            })
        }else{
            dispatch(createTask(event.target.text.value,user!.userName));
            event.target.text.value='';
        }
    }
    const tacharTask=(event:any)=>{
        event.preventDefault();
        const task=tasks!.find(task=>task.id==event.target.id);
        console.log('el task change es: ',task)
        const change=task!.tach? false:true;

        dispatch(tachTask(task!.id,change))
        // console.log(event.target.parentNode);


        // console.log(task);
        console.log('El cambio es: ',change)
        if(!change){

            event.target.style.textDecoration = 'none';
            event.target.parentNode.style.opacity='0.7';
        }else{
            event.target.style.textDecoration = 'line-through';
            event.target.parentNode.style.opacity = '1';
        }

    }

    const tasKDelete=(event:any) => {

        event.preventDefault();
        console.log(event.target.id);
        dispatch(deleteTask(event.target.id));
    }




    return (
        <TodoBar >
            {console.log('todo renderizado: ',tasks)}
            <span onClick={() => setVist(!vist)} className='buttonLink'>
                Tasks
            </span>
            <Modal style={vist ? desplegable : close}>
               <Content>
                   
                   <header>
                       Task List
                        <button onClick={() => setVist(!vist)} className='close'>
                            X
                        </button>
                   </header>
                   <hr/>
                    <List className='listGrid scroll'>
                        {tasks && tasks.length ?

                            tasks.map(task =>{
                                console.log(task.tach)
                                const color=task.tach? 
                                    { backgroundColor:'#386076',opacity:'0.7'}
                                :
                                { opacity: '1'}

                                return (
                                    <div key={task.id} style={color}>
                                        <span onClick={tacharTask} id={task.id.toString()}>
                                            {task.text} 
                                        </span>
                                        {/* <img src='../../../assets/icons/check.svg' alt='check' /> */}
                                        <img src='../../../assets/icons/trash.svg' alt='delete' id={task.id.toString()} onClick={tasKDelete}/>
                                    </div>  
                                )
                            })
                            :
                            <span className="not">Not have tasks</span>

                        }

                    </List>
                    <Aside onSubmit={sendTask} autoComplete='off'>
                        <input type='text' placeholder='New Todo' name="text"/>
                        <button>Add Task</button>
                    </Aside>
                </Content>
                
           </Modal>
        </TodoBar>
    )
}

export default Todo;