import { useState,useEffect } from 'react';
import {List} from './links';
import {  Archive } from '../../../redux/interface';
import {InputCrud}from './links';
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux';
import { State } from '../../../redux/reducers';
import { createFile, deleteFile, getFileData } from '../../../redux/actions/file';


interface List {
    nameTitle: string
}


interface Estilos {
    visible: string,
    height: string;
    display?: string;
    animation?: string,
}

const ListLink = ({  nameTitle }: List): JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);
    const {id}=useParams();
    const dispatch = useDispatch();
    const archivos=useSelector((state:State)=>state.courseDetail.files);

    useEffect(()=>{
        if(archivos.length){
            console.log('primer archivo',archivos[0])
            dispatch(getFileData(id as string, archivos[0].name))
        }
    },[archivos])



    let estilos: Estilos;
    estilos = visible ? estilos = { visible: 'block', height: '200px', animation: 'open 0.5s linear' } : estilos = { visible: 'block', height: '0px', animation: 'cerrar 0.5s linear', }

    const heigth = !add ? {
        transition: 'clip-path 1s ease',
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    } : {
        transition: 'clip-path 1s ease',
        clipPath: ' polygon(0 100%, 100% 100%, 100% 0, 0 0)'
    }


    const createFileEvent = (event: React.ChangeEvent<HTMLFormElement>) => {

        event.preventDefault();
        const name = event.target.nameLink.value;
        const file = event.target.file.files[0];
        dispatch(createFile(name,id as string,file));
        setAdd(!add);
        // event.target.nameLink.value = '';
        // event.target.urlLink.value = '';
    }

    const ReadFile=(event:any) => {

        dispatch(getFileData(id as string, event.target.id))

    }

    const FileDelete=(event:any) => {

        dispatch(deleteFile(event.target.id,id as string))


    }


    return (
        <div className='containerList'>
            <h3>
                <span onClick={() => setVisible(!visible)}>{nameTitle}</span>
                {visible ?
                    <div className="icons">
                        
                        <img src='../assets/icons/add.svg' onClick={()=>{setAdd(!add)}}/>
                    </div>
                    :
                    null
                }
            </h3>
            <List>
                <div className="list" style={estilos}>
                    {console.log(archivos)}

                    {
                        archivos.map((file: Archive, i: number) => {
                            let color = '#b5abab';

                            if (i % 2 == 0) color = '#ecdcdc';

                            return (
                                <div key={file.name} style={{ backgroundColor: color, width: '100%', textAlign: 'center' }} className='container_links'>

                                    <span onClick={ReadFile} id={file.name}>
                                        {file.name}
                                    </span>
                                    <div>
                                        <img src='../assets/icons/trash.svg'  id={file.name} onClick={FileDelete}/>
                                        {/* <img src='../assets/icons/pencil.svg' /><br /> */}
                                    </div>
                                    

                                </div>
                            )
                        })
                    }
                    <form className='newLink' style={heigth}  autoComplete='off' onSubmit={createFileEvent}>
                        <InputCrud type='text' name='nameLink' placeholder='name' />
                        <InputCrud type='file' name='file' placeholder='file' required accept='.pdf' />
                        <button>Create</button>
                    </form>

                </div>
            </List>
        </div>

    )
}

interface PropFiles{
    color:string,
    name:string
}

const Files=({color,name}:PropFiles): JSX.Element => {


    return(
        <div style={{ backgroundColor: color, width: '100%' }}>

            <span>
                {name}
            </span>


        </div>
    )
}

export default ListLink;