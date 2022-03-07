import {useState} from 'react';
import { Aside, Content, Input, TextArea, SubFile } from './stCreate';

interface Prop{
    changeVisible:any,
    visible:Boolean,
    look:Boolean
}


const Vista=({changeVisible,visible,look}:Prop):JSX.Element=>{
    
    const [file,setFile]=useState<string>('');
    const [course,setCourse]=useState({

    })
    
    let width= look ? '400px': '0px';
    let widthButton = look ? 'block' : 'none';

    return (
        <Aside >
            <aside style={{ width: width }}>
                <button onClick={() => changeVisible(!visible)} className="btn-close" style={{ display: widthButton }}>
                    -¬
                </button>
                <Content autoComplete='off' 
                    onSubmit={(event)=>{
                        event.preventDefault();
                        console.log('se enviaran los datos')

                    }}
                    onChange={()=>{

                    }}
                >
                    <header>Create the Course</header>
                    <Input type='text' placeholder='Course name...' name='name'/>
                    <TextArea placeholder='Description of course...' name='content'/>
                    <SubFile >
                        <span>Add Image</span>
                        {/* <img src={SVG} alt='file'/> */}
                        <i>+</i>
                        <Input type='file' onChange={(event) => {
                            console.log(event.target.value.split('\\'))
                            let res = event.target.value.split('\\');
                            console.log(res.join('/'))

                            setFile(res.join('/'))
                            // setFile(event.target.value.split('\\').pop())
                        }} accept='.png,.jpg'  name='image'/>
                        {/* <span id='file'>{file}</span> */}

                    </SubFile>
                    <img src={file} />

                    <button className='btn-crear'>Crear</button>
                </Content>

            </aside>
        </Aside>
        )
}
export default Vista;