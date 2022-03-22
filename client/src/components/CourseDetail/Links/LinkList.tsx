import { ListLink,Headers } from "./StyListas";
import {  InputCrud } from './links';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { Link } from '../../../redux/interface';
import { createLink, deleteLink } from '../../../redux/actions/link';
import {useParams} from 'react-router-dom';


interface Estilos {
    visible: string,
    height: string;
    display?: string;
    animation?: string,
}


const LinkList=(): JSX.Element => {

    // const [visible, setVisible] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);
    const dispatch=useDispatch();
    const {id}=useParams();
    const links = useSelector((state: State) => state.courseDetail.links);
    console.log('los links son: ',links)


    const heigth = !add ? {
        transition: 'clip-path 1s ease',
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    } : {
        transition: 'clip-path 1s ease',
        clipPath: ' polygon(0 100%, 100% 100%, 100% 0, 0 0)'

    }

    const createLinkEvent = (event: React.ChangeEvent<HTMLFormElement>) => {

        event.preventDefault();
        const name = event.target.nameLink.value;
        const url = event.target.urlLink.value;
        dispatch(createLink(name, id as string, url));
        setAdd(!add);
        event.target.nameLink.value = '';
        event.target.urlLink.value = '';
    }

    const clickAdd = (event: any) => {

        event.preventDefault();
        setAdd(!add);

    }

    const formDeleteLink = (event:any) => {
        console.log(event.target);
        dispatch(deleteLink(event.target.id))

    }

    return(
        <>
            <ListLink>
                <div className='listFormLinks'>
                    <Headers>
                        <span>Links</span>
                        <img src='../assets/icons/add.svg' onClick={clickAdd} />
                    </Headers>
                    <article>
                        {
                            links.map((link: Link, i: number) => {
                                let color = '#b5abab';

                                if (i % 2 == 0) color = '#ecdcdc';

                                return (
                                    <Links name={link.name} color={color} url={link.url} key={link.name} deleteUrl={formDeleteLink}/>
                                )


                            })
                        }

                        <form className='newLink' style={heigth} onSubmit={createLinkEvent} autoComplete='off'>
                            <InputCrud type='text' name='nameLink' placeholder='name' />
                            <InputCrud type='url' name='urlLink' placeholder='https://example.com' required />
                            <button>Create</button>
                        </form>
                    </article>
                </div>
            </ListLink>

        </>
    )
}

const Links = ({ color, name, url, deleteUrl }: any): JSX.Element => {


    // const [editable,setEditable]=useState<boolean>(false);

    //faltaria poder editar el nombre del url

    return (
        <div key={name} style={{ backgroundColor: color, width: '100%', textAlign: 'center' }} className='container_links'>
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


export default LinkList;