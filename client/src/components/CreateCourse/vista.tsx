import {useState} from 'react';
import { Aside, Content, Input, TextArea, SubFile, Buttons } from './stCreate';
import { validateInfo, validator} from '../../helpers/validateForm';
import { useDispatch } from 'react-redux';
import { createCourse } from '../../redux/actions/course';


interface Prop{
    changeVisible:any,
    visible:Boolean,
    look:Boolean
}
interface Course{
    name:string,
    content?:string,
}

export interface Curso {
    name: string;
    content: string | null;
    img?: any;
    // id:number,
    files: string[] | [];
    links: string[] | [];
    lastSeen: Date;
}



const URL: string ='http://localhost:3001/api/courses'


const Vista=({changeVisible,visible,look}:Prop):JSX.Element=>{

    const dispatch=useDispatch();
    
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
        console.log('fomr: ',event)

        if (validateInfo(error, input).length > 0) {
           return alert('existen erroes o faltan campos a completar')
        }

        if (event.target.content.value.length > 160){
            alert('The course description should not be longer than 160 letters')
        }

        let curso:Curso={
            name: input.name,
            content: event.target.content.value,
            img:event.target.image.files[0],
            files: [],
            links: [],
            lastSeen: new Date(),
        }

        dispatch(createCourse(input.name,curso));

        //Reseteo de las inputs jajaja

        event.target.content.value='';
        event.target.name.value = '';

        setInput({
            ...input,
            name:''
        })
        setImg(null);
        const files = Array.from(event.target.image.files)
        files[0]=undefined;


    }

    const reseteo=(event:any)=>{

        setInput({
            ...input,
            name: ''
        })
        setImg('');
        console.log(event);
        console.log(input)
        console.log(img)

    }
    

    return (
        <Aside >
            {console.log('vista renderizada')}
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
                        {img ? <img src={img} />: <span>preview of the image</span>}
                    </div>
                    <Buttons>
                        <button className='btn-crear' >Crear</button>
                        <input className='btn-crear' type='reset' value='Reset' onClick={reseteo}/>
                    </Buttons>
                </Content>

            </aside>
        </Aside>
        )
}
export default Vista;