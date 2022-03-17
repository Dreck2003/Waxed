
import {Course,Informer,Visto} from './styCard';
import { useNavigate } from 'react-router-dom';

interface Prop{
    img:string,
    info:string,
    name:string,
    actualizado:Date
}

const Card=({img,info,name,actualizado}:Prop):JSX.Element=>{
    const navigate=useNavigate();

    const urlImg = img ? img : 'assets/images/default.jpg' 

    return (
        <Course onClick={()=>{navigate(`/courses/${name}`)}}>
            <div className="imagen">
                <img src={urlImg} alt='img_default'/>
               {/* <div className="encima">IMAGE NOT FOUND</div>  */}
            </div>
            <Informer>
                <h3>{name}</h3>
                <div className="description">
                    {info} 
                </div>
            </Informer> 
            <Visto>
                {actualizado.toString()}
            </Visto>
        </Course>
    )
}

export default Card;