import  { useState } from 'react';
import { Link } from '../../../redux/interface';
import {List,InputCrud} from './links';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createLink} from '../../../redux/actions/link';

interface List {
    links: Link[] 
    nameTitle: string,
    // courseId:string
}


interface Estilos {
    visible: string,
    height: string;
    display?: string;
    animation?: string,
}

const ListLink = ({ links, nameTitle }: List): JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);
    const [add, setAdd]=useState<boolean>(false);
    const {id}=useParams();
    const dispatch=useDispatch();


    let estilos: Estilos;
    estilos = visible ? estilos = { visible: 'block', height: '100%', animation: 'open 0.5s linear' } : estilos = { visible: 'block', height: '0px', animation: 'cerrar 0.5s linear', }


    console.log(id)
    const clickAdd=(event:any) => {

        event.preventDefault();
        setAdd(!add);
        console.log(event.clientX,event.clientY);

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
        console.log(event.target);
        const name=event.target.nameLink.value;
        const url=event.target.urlLink.value;
        console.log(name,url)
        dispatch(createLink(name,id as string,url));
        setAdd(!add);
    }


    return (
        <div className="containerList">
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
                                <div key={i} style={{ backgroundColor: color, width: '100%', textAlign: 'center'}} className='container_links'>
                                    <a href={link.url} target='_blank'>
                                        {link.name}
                                    </a>
                                    <div>
                                        <img src='../assets/icons/trash.svg' />
                                        <img src='../assets/icons/pencil.svg' /><br />
                                    </div>
                                </div>
                            )


                        })

                    }

                    <form className='newLink' style={heigth} onSubmit={createLinkEvent}>
                        <InputCrud type='text' name='nameLink' placeholder='name'/>
                        <InputCrud type='url' name='urlLink' placeholder='https://example.com' required/>
                        <button>Create</button>
                    </form>

                </div>
            </List>
        </div>

    )
}

export default ListLink;