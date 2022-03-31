
import {Course,Informer,Visto} from './styCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../../redux/actions/course';
import { State } from '../../redux/reducers';

interface Prop{
    img:string,
    info:string,
    name:string,
    date:string,
    id:number
}
const Corte ='http://localhost:3001/'

const Card=({img,info,name,date,id}:Prop):JSX.Element=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector((state: State) => state.user);

    let urlImg = img ? img: 'assets/images/default.jpg' ;
    let nameFinal=name[0].toUpperCase()+name.slice(1).toLowerCase();

    const deletedCourse=(event:any)=>{
        event.preventDefault();
        console.log(event.target);
        dispatch(deleteCourse(id,user!.token))

    }

    return (
        <Course>
            <b onClick={deletedCourse}>
                x
            </b>
            <div className="imagen" onClick={() => { navigate(`/courses/${id}`) }}>
                <img src={urlImg} alt='img_default'/>
               {/* <div className="encima">IMAGE NOT FOUND</div>  */}
            </div>
            <Informer>
                <h3>{nameFinal}</h3>
                <div className="description">
                    {info} 
                </div>
            </Informer> 
            <Visto>
                visto:{date}
            </Visto>
        </Course>
    )
}

export default Card;