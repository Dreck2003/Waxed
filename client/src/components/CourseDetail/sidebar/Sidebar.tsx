import { SectionBar, ListItems,Submenu } from "./StySidebar";
import {useNavigate} from 'react-router-dom'
import { useState } from "react";

interface Visibles{
    [key: string]:boolean,
}


const Sidebar = (): JSX.Element => {
    const navigate=useNavigate();
    const [submenu,setSubmenu] = useState<Visibles>({
        links:false,
        files:false,
        calculator:false

    });

    const changeMenu=(prop:string) => {

        const newMenu:Visibles ={
            links: false,
            files: false,
            calculator:false
        };
        const arreglo=Object.keys(submenu);
        
        arreglo.forEach((key:string) => {

            if(key === prop){

                if(submenu[key]===true){

                    newMenu[prop]=false;

                }else{
                    newMenu[prop] = true;
                }
            }
        })
        console.log(prop,newMenu);
        setSubmenu(newMenu);
    }
    

    return (
        <SectionBar className="item-grid">
            <ListItems>
                <li onClick={() => changeMenu('links')}>
                    <div>
                        <img src='../../../../assets/icons/link.svg' alt='links' />
                    </div>
                    <span>Links</span>
                    {submenu.links && <Submenu>
                        links
                    </Submenu>}
                </li>
                <li onClick={() => changeMenu('files')}>
                    <div>
                        <img src='../../../../assets/icons/file.svg' alt='files' />
                    </div>
                    <span>Files</span>
                    {submenu.files && <Submenu>
                        files
                    </Submenu>}
                </li>
                <li onClick={() => changeMenu('calculator')}>
                    <div>
                        <img src='../../../../assets/icons/calculadora.svg' alt='calculator' />
                    </div>
                    <span>Calculator</span>
                    {submenu.calculator && <Submenu>
                        calculadora
                    </Submenu>}
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