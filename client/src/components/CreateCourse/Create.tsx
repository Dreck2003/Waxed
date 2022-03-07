// import {useRef} from 'react';

import { useState } from 'react';
import {Container} from './stCreate';
import Vista from './vista';



const Create=():JSX.Element=>{

    const [visible,setVisible]=useState<Boolean>(false);


    return (
        <Container>
            <span onClick={()=>setVisible(!visible)}  style={{fontWeight:'bold',cursor:'pointer'}}>
                Create Course
            </span>
            <Vista changeVisible={setVisible} visible={visible} look={visible}/>
        </Container>
    )
}

export default Create;