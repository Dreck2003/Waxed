import { useState } from 'react';
import { Aside, Content, Input, TextArea, SubFile, Buttons } from './stCreate';
import { validateInfo, validator } from '../../helpers/validateForm';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../redux/actions/course';
import { State } from '../../redux/reducers/index';
import { dateToString } from '../../helpers/date';
import Swal from 'sweetalert';



interface Prop {
    changeVisible: any,
    visible: Boolean,
    look: Boolean
}
interface Course {
    name: string,
    content?: string,
    image:any
}




const Vista = ({ changeVisible, visible, look }: Prop): JSX.Element => {

    const dispatch = useDispatch();
    const user = useSelector((state: State) => state.user);
    const courses=useSelector((state:State)=>state.courses);

    const [img, setImg] = useState<any>(null);
    const [input, setInput] = useState<Course>({
        name: '',
        image:''
    });
    const [error, setError] = useState<Course>({
        name: '',
        image:''
    });

    let width = look ? '400px' : '0px';
    let widthButton = look ? 'block' : 'none';


    const handleChange = (event: React.ChangeEvent<any>) => {

        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })

        if (event.target.name !== 'content') {
            setError(validator(error, event.target));
            
        } else {


        }

    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('fomr: ', event);
        const course = new FormData(event.target);

        const file = course.get('image');
            console.log('archivo:  ',file)
        if (!file) {
            setError({
                ...error,
                image: 'The file not exist!'
            })
            return null;
        } else {
            setError({
                ...error,
                image: ''
            })
        }

        if (!(user!.name)) return console.error('handleSUbmit:vista');
        const res= validateInfo(error,input);

        if (res.length > 0) {
            console.log(res);
            Swal({
                title:'Request paused',
                text:res[0],
                icon:'warning'
            })
            return null;
        }

        if (event.target.content.value.length > 160) {
            Swal({
                title:'Error',
                text:'he course description should not be longer than 160 letters',
                icon:'warning'
            })
        }

        let day:any=new Date();
        day=day.toString();
        course.append('date', dateToString(day));

        const nameCourse = course.get('name');
        console.log(file)
        if (/[^a-z\x20]/.test(nameCourse as string)){
            setError({
                ...error,
                name: "The field cannot have signs"
            })
            return null;

        }
        
        const findCourse=courses.find(course=>course.name===nameCourse);

        if(findCourse){
            Swal({
                title:'The course already exists',
                icon:'warning'
            });

        }else{

            // console.log(user!.userName);
            // course.append('userName',user!.userName);
    
            dispatch(createCourse(course,user!.token));
            //Reseteo de las inputs jajaja
    
            event.target.content.value = '';
            event.target.name.value = '';
    
            setInput({
                ...input,
                name: ''
            })
            setImg(null);
            const files = Array.from(event.target.image.files)
            files[0] = undefined;
        }

    }

    const reseteo = (event: any) => {

        setInput({
            ...input,
            name: ''
        })
        setImg('');

    }

    let stylesName = error.name ? 'is-invalid error' : 'error';
    let stylesContent = error.content ? 'is-invalid-input' : '';

    return (
        <Aside >
            {console.log('vista renderizada')}
            <aside style={{ width: width }}>
                <button onClick={() => changeVisible(!visible)} className="btn-close" style={{ display: widthButton }}>
                    <img src="../../assets/icons/close.svg" />
                </button>
                <Content autoComplete='off'
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                >
                    <header>Create your Space</header>
                    <div title={error.name} className={stylesName}>
                        <Input type='text' placeholder='Space name...' name='name'  />
                        <b>
                            !
                        </b>
                    </div>
                    <TextArea placeholder='Description of Space...' name='content' title={error.content} className={stylesContent}/>
                    <input type='hidden' value={user!.userName} name='userName'/>
                    <SubFile >
                        <span>Add Image</span>
                        <i>+</i>
                        <Input type='file' onChange={(event) => {

                            const reader = new FileReader();
                            const input = event.target as HTMLInputElement;

                            reader.readAsDataURL(input.files![0]);
                            reader.addEventListener('load', (event) => {
                                setImg(event.target!.result);
                            })

                        }} accept='.png,.jpg' name='image' />

                    </SubFile>
                    <div>
                        {img ? <img src={img} /> : <span>preview of the image</span>}
                    </div>
                    {error.image && <b>{error.image}</b>}
                    <Buttons>
                        <button className='btn-crear' >Crear</button>
                        <input className='btn-crear' type='reset' value='Reset' onClick={reseteo} />
                    </Buttons>
                </Content>

            </aside>
        </Aside>
    )
}
export default Vista;