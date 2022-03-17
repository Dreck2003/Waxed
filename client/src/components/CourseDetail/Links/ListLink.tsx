import { useState } from 'react';
import { Link } from '../../../redux/interface';
import {List,InputCrud} from './links';
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { State } from '../../../redux/reducers';
import {createLink,deleteLink} from '../../../redux/actions/link';

interface List {
    // links: Link[] 
    nameTitle: string,
    // courseId:string
}


interface Estilos {
    visible: string,
    height: string;
    display?: string;
    animation?: string,
}

const ListLink = ({ nameTitle }: List): JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);
    const [add, setAdd]=useState<boolean>(false);
    const {id}=useParams();
    const dispatch=useDispatch();
    const links = useSelector((state: State) => state.courseDetail.links)

    let estilos: Estilos;
    estilos = visible ? estilos = { visible: 'block', height: '200px', animation: 'open 0.5s linear' } : estilos = { visible: 'block', height: '0px', animation: 'cerrar 0.5s linear', }


    const clickAdd=(event:any) => {

        event.preventDefault();
        setAdd(!add);

    }

    const heigth = !add ? {
        transition: 'clip-path 1s ease',
        clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    } : {
        transition: 'clip-path 1s ease',
        clipPath:' polygon(0 100%, 100% 100%, 100% 0, 0 0)'

    }
    // const display


    const createLinkEvent=(event:React.ChangeEvent<HTMLFormElement>) =>{

        event.preventDefault();
        const name=event.target.nameLink.value;
        const url=event.target.urlLink.value;
        dispatch(createLink(name,id as string,url));
        setAdd(!add);
        event.target.nameLink.value='';
        event.target.urlLink.value='';
    }

    const formDeleteLink = (event:React.MouseEvent<HTMLImageElement>) =>{
        console.log(event.target);
         dispatch(deleteLink(event.target.id,id as string))

    }


    return (
        <div className="containerList">
            {console.log('los links son: ',links)}
            <h3 >
                <span onClick={() => setVisible(!visible)} >{nameTitle}</span>
                {visible ?
                    <div className="icons">
                        
                        <img src='../assets/icons/add.svg'  onClick={clickAdd}/>
                    </div>
                    :
                    null
                }
            </h3>
            <List>
                <div className="list" style={estilos}>

                    {
                        links.map((link: Link, i: number) => {
                            let color = '#b5abab';

                            if (i % 2 == 0) color = '#ecdcdc';

                            return (
                                <Links name={link.name} color={color} url={link.url} deleteUrl={formDeleteLink} key={link.name}/>
                            )


                        })
                    }

                    <form className='newLink' style={heigth} onSubmit={createLinkEvent} autoComplete='off'>
                        <InputCrud type='text' name='nameLink' placeholder='name'/>
                        <InputCrud type='url' name='urlLink' placeholder='https://example.com' required/>
                        <button>Create</button>
                    </form>

                </div>
            </List>
        </div>

    )
}


interface PropLink {
    color: string,
    name: string
    url:string,
    deleteUrl: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const Links = ({ color, name, url, deleteUrl}: PropLink): JSX.Element => {


    // const [editable,setEditable]=useState<boolean>(false);

    //faltaria poder editar el nombre del url

    return (
        <div key={name.toString()} style={{ backgroundColor: color, width: '100%', textAlign: 'center' }} className='container_links'>
            <a href={url} target='_blank'>
                {name}
            </a>
            <div>
                <img src='../assets/icons/trash.svg' onClick={deleteUrl} id={name} />
                {/* <img src='../assets/icons/pencil.svg' /><br /> */}
            </div>
        </div>
    )
}









export default ListLink;