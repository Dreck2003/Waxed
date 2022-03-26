import { useState } from "react";
import { Aside, Content, Header, List, Modal, TodoBar } from "./StyTodo";

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

    return (
        <TodoBar >
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
                    <List className='listGrid'>
                        <div>
                            uno
                            <img src='../../../assets/icons/check.svg' alt='good' />
                            <img src='../../../assets/icons/trash.svg' alt='good' />
                        </div>
                        <div>
                            Dos
                            <img src='../../../assets/icons/check.svg' alt='good' />
                            <img src='../../../assets/icons/trash.svg' alt='good' />
                        </div>

                    </List>
                    <Aside>
                        <input type='text' placeholder='New Todo' />
                        <button>Add Task</button>
                    </Aside>
                </Content>
                
           </Modal>
        </TodoBar>
    )
}

export default Todo;