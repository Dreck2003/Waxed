import { SectionBar, ListItems } from "./StySidebar";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import LinkList from "../Links/LinkList";
import FileList from "../Links/FileList";
import { useDispatch } from "react-redux";
import {viewSidebar} from '../../../redux/actions/courseDetail';

interface Visibles{
    [key: string]:boolean,
}

interface Prop{
    valor:boolean,
    changeValor:any
}


const Sidebar = ({valor,changeValor}:Prop): JSX.Element => {
    const navigate=useNavigate();
    
    const dispatch=useDispatch();

    

    return (
        <SectionBar className="item-grid">
            <ListItems>
                <li onClick={() => dispatch(viewSidebar('links'))}>
                    <div>
                        <img src='../../../../assets/icons/link.svg' alt='links' />
                    </div>
                    <span>Links</span>

                </li>
                <li onClick={() => dispatch(viewSidebar('files'))}>
                    <div>
                        <img src='../../../../assets/icons/file.svg' alt='files' />
                    </div>
                    <span>Files</span>

                </li>
                <li onClick={() => dispatch(viewSidebar('calculator'))}>
                    <div>
                        <img src='../../../../assets/icons/calculadora.svg' alt='calculator' />
                    </div>
                    <span>Calculator</span>

                </li>
                <li onClick={()=>navigate('/home')}>
                    <span>
                        Home
                    </span>
                </li>

            </ListItems>
        </SectionBar>
    )

}


// const ListLinks=():JSX.Element=>{


//     return(
//         <
//     )
// }







export default Sidebar;