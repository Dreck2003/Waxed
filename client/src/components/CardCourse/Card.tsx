
import {Course,Informer,Visto} from './styCard';
import { useNavigate } from 'react-router-dom';

interface Prop{
    img:string,
    info:string,
    name:string
}

const Card=({img,info,name}:Prop):JSX.Element=>{
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
                ACtualizacion tal: fjkrngn
            </Visto>
        </Course>
    )
}

export default Card;