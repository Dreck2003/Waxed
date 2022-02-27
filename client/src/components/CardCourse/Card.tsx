
import {Course} from './styCard';
const Card=():JSX.Element=>{

    return (
        <Course>
            <div className="imagen">
                <img src='assets/images/default.jpg' alt='img_default'/>
               <div className="encima">IMAGE NOT FOUND</div> 
            </div>
        </Course>
    )
}

export default Card;