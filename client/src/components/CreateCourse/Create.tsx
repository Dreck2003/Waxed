// import {useRef} from 'react';

import { useState } from 'react';
import {Container, Modal,Content,Input,TextArea,SubFile} from './stCreate';

const Create=():JSX.Element=>{

    const [visible,setVisible]=useState<Boolean>(false);

    return (
        <Container>
            <span onClick={()=>setVisible(!visible)}  style={{fontWeight:'bold',cursor:'pointer'}}>
                Create Course
            </span>
            <Modal visible={visible}>
                <button onClick={()=>setVisible(!visible)} className="btn-close">
                 x
                </button>
                <Content>
                    <header>Create the Course</header>
                    <Input type='text' placeholder='Course name...'/>
                    <TextArea placeholder='Description of course...'/>
                    <SubFile >
                        <span>Add Image</span>
                        {/* <img src={SVG} alt='file'/> */}
                        <i>+</i>
                        <Input type='file'  onChange={(event)=>{
                           const puntero = document.getElementById('file');
                           puntero.innerHTML = event.target.value.split('\\').pop() ;
                        }} accept='.png,.jpg'/>
                        <span id='file'></span>

                    </SubFile>
                    <button className='btn-crear'>Crear</button>
                </Content>
            </Modal>
        </Container>
    )
}

export default Create;