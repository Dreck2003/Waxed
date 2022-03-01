
import {Course,Informer,Visto} from './styCard';
import { useNavigate } from 'react-router-dom';
const Card=():JSX.Element=>{
    const navigate=useNavigate();
    const id:number=3;

    return (
        <Course onClick={()=>{navigate(`/courses/${id}`)}}>
            <div className="imagen">
                <img src='assets/images/default.jpg' alt='img_default'/>
               <div className="encima">IMAGE NOT FOUND</div> 
            </div>
            <Informer>
                <h3>MATEMATICA</h3>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nisi doloremque delectus architecto minus tempore illo voluptatum sequi nihil? 
                </div>
            </Informer> 
            <Visto>
                ACtualizacion tal: fjkrngn
            </Visto>
        </Course>
    )
}

export default Card;