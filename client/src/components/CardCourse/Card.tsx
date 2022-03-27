
import {Course,Informer,Visto} from './styCard';
import { useNavigate } from 'react-router-dom';

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

    let urlImg = img ? img: 'assets/images/default.jpg' ;
    let nameFinal=name[0].toUpperCase()+name.slice(1).toLowerCase();

    return (
        <Course onClick={()=>{navigate(`/courses/${id}`)}}>
            <div className="imagen">
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