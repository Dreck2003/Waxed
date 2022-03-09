import {useState} from 'react';
import { Aside, Content, Input, TextArea, SubFile } from './stCreate';
import {sendCourse, validateInfo, validator} from '../../helpers/validateForm';

interface Prop{
    changeVisible:any,
    visible:Boolean,
    look:Boolean
}
interface Course{
    name:string,
    content?:string,
}
const URL: string ='http://localhost:3001/api/courses'


const Vista=({changeVisible,visible,look}:Prop):JSX.Element=>{
    
    const [img,setImg]=useState<any>(null);
    const [input,setInput]=useState<Course>({
        name:'',
    });
    const [error, setError] = useState<Course>({
        name: '',
    });
    
    let width= look ? '400px': '0px';
    let widthButton = look ? 'block' : 'none';


    const handleChange = (event: React.ChangeEvent<any>)=>{

        console.log(event.target.name)
        setInput({
            ...input,
            [event.target.name]:event.target.value,
        })
    
        if(event.target.name !== 'content'){
            setError(validator(error, event.target))
        }else{

            
        }

    }

    const handleSubmit=(event:any)=>{
        event.preventDefault();
        console.log('se hace la solicitud')

        if (validateInfo(error, input).length > 0) {
           return alert('existen erroes o faltan campos a completar')
        }

        const dataForm = new FormData(event.target);
        console.log(dataForm.get('name'))
        if (dataForm.get('content')!.length > 160){
            alert('the course description should not be longer than 160 letters')
        }

        sendCourse(URL,dataForm,(info:any)=>{

            console.log(info)
        })

    }

    return (
        <Aside >
            <aside style={{ width: width }}>
                <button onClick={() => changeVisible(!visible)} className="btn-close" style={{ display: widthButton }}>
                    -¬
                </button>
                <Content autoComplete='off' 
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                >
                    <header>Create the Course</header>
                    <Input type='text' placeholder='Course name...' name='name'/>
                    <TextArea placeholder='Description of course...' name='content'/>
                    <SubFile >
                        <span>Add Image</span>
                        {/* <img src={SVG} alt='file'/> */}
                        <i>+</i>
                        <Input type='file' onChange={(event) => {
                            
                            const reader=new FileReader();
                            const input=event.target as HTMLInputElement;

                            reader.readAsDataURL(input.files![0]);
                            reader.addEventListener('load', (event) => {
                                console.log(event.target!.result)
                                setImg(event.target!.result);
                            })

                        }} accept='.png,.jpg'  name='image'/>

                    </SubFile>
                    <div>
                        <img src={img} />
                    </div>
                    <button className='btn-crear'>Crear</button>
                </Content>

            </aside>
        </Aside>
        )
}
export default Vista;