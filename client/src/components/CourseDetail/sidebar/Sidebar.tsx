import { SectionBar, ListItems,Avatar } from "./StySidebar";
import {useNavigate,useParams} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import {viewSidebar} from '../../../redux/actions/courseDetail';
import { State } from "../../../redux/reducers";



const Sidebar = (): JSX.Element => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {id}=useParams();
    const cursos=useSelector((state:State)=>state.courses);

    const urlImage=cursos.find((course:any)=>course.name===id);

    return (
        <SectionBar className="item-grid">
            <Avatar>
                <div><img src={urlImage!.img} /></div>
                <span>{urlImage!.name}</span>
            </Avatar>

            <ListItems>
                <li onClick={() => navigate('/home')}>
                    <div>
                        <img src='../../../../assets/icons/home.svg' alt='Home' />
                    </div>
                    <span>
                        Home
                    </span>
                </li>
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
                <li onClick={() => dispatch(viewSidebar('summary'))}>
                    <div>
                        <img src='../../../../assets/icons/note.svg' alt='files' />
                    </div>
                    <span>Summary</span>

                </li>
                <li onClick={() => dispatch(viewSidebar('calculator'))}>
                    <div>
                        <img src='../../../../assets/icons/calculadora.svg' alt='calculator' />
                    </div>
                    <span>Calculator</span>
                </li>
                

            </ListItems>
        </SectionBar>
    )

}









export default Sidebar;