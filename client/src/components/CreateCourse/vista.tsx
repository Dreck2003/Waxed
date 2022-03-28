import { useState } from 'react';
import { Aside, Content, Input, TextArea, SubFile, Buttons } from './stCreate';
import { validateInfo, validator } from '../../helpers/validateForm';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../redux/actions/course';
import { State } from '../../redux/reducers/index';
import { dateToString } from '../../helpers/date';



interface Prop {
    changeVisible: any,
    visible: Boolean,
    look: Boolean
}
interface Course {
    name: string,
    content?: string,
}

export interface Curso {
    name: string;
    content: string | null;
    img?: any;

}



const URL: string = 'http://localhost:3001/api/courses'


const Vista = ({ changeVisible, visible, look }: Prop): JSX.Element => {

    const dispatch = useDispatch();
    const user = useSelector((state: State) => state.user)

    const [img, setImg] = useState<any>(null);
    const [input, setInput] = useState<Course>({
        name: '',
    });
    const [error, setError] = useState<Course>({
        name: '',
    });

    let width = look ? '400px' : '0px';
    let widthButton = look ? 'block' : 'none';


    const handleChange = (event: React.ChangeEvent<any>) => {

        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })

        if (event.target.name !== 'content') {
            setError(validator(error, event.target))
        } else {


        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('fomr: ', event)

        if (!(user!.name)) return console.error('handleSUbmit:vista');

        if (validateInfo(error, input).length > 0) {
            return alert('existen erroes o faltan campos a completar')
        }

        if (event.target.content.value.length > 160) {
            alert('The course description should not be longer than 160 letters')
        }

        const course = new FormData(event.target);
        let day:any=new Date();
        day=day.toString();
        course.append('date', dateToString(day));
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

    const reseteo = (event: any) => {

        setInput({
            ...input,
            name: ''
        })
        setImg('');

    }


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
                    <header>Create the Course</header>
                    <Input type='text' placeholder='Course name...' name='name' />
                    <TextArea placeholder='Description of course...' name='content' />
                    <input type='hidden' value={user!.userName} name='userName' />
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