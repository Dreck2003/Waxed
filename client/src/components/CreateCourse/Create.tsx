// import {useRef} from 'react';

import { useState } from 'react';
import {Container} from './stCreate';
import Vista from './vista';



const Create=():JSX.Element=>{

    const [visible,setVisible]=useState<Boolean>(false);


    return (
        <Container >
            <div className='buttonLink' onClick={() => setVisible(!visible)}>
                <span >
                    Create Course
                </span>
            </div>
            <Vista changeVisible={setVisible} visible={visible} look={visible}/>
        </Container>
    )
}

export default Create;