import { ListLink, Headers } from "./StyListas";
import { InputCrud } from './links';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { Archive } from '../../../redux/interface';
import { createFile, deleteFile, getFileData } from '../../../redux/actions/file';
import { useParams } from 'react-router-dom';


const FileList = (): JSX.Element => {

    // const [visible, setVisible] = useState<boolean>(false);
    const [add, setAdd] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    const archivos = useSelector((state: State) => state.courseDetail.files);
    console.log('los links son: ', archivos);


    const heigth = !add ? {
        transition: 'clip-path 1s ease',
        clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'
    } : {
        transition: 'clip-path 1s ease',
        clipPath: ' polygon(0 100%, 100% 100%, 100% 0, 0 0)'

    }

    const createFileEvent = async (event: React.ChangeEvent<HTMLFormElement>) => {

        event.preventDefault();
        // const name = event.target.nameLink.value;
        // const file = event.target.file.files[0];
        // dispatch(createFile(name,id as string,file));
        setAdd(!add);
        // event.target.nameLink.value = '';
        // event.target.urlLink.value = '';

        console.log(event)
        const sendData = new FormData(event.target);

        dispatch(createFile(sendData));

    }

    const ReadFile = (event: any) => {

        console.log(event.target.id)
        dispatch(getFileData(event.target.id))

    }

    const clickAdd = (event: any) => {

        event.preventDefault();
        setAdd(!add);

    }

    const FileDelete = (event: any) => {

        dispatch(deleteFile(event.target.id, id as string))


    }

    return (
        <>
            <ListLink>
                <div className='listFormLinks'>
                    <Headers>
                        <span>Files</span>
                        <img src='../assets/icons/add.svg' onClick={clickAdd} />
                    </Headers>
                    <article className='listGrid'>
                        {
                            archivos.map((file: Archive, i: number) => {
                                let color = '#b5abab';

                                if (i % 2 == 0) color = '#ecdcdc';

                                return (
                                    <div key={file.name} style={{ width: '100%', textAlign: 'center' }} className='container_links'>
                                        <span>{++i}</span>
                                        <span onClick={ReadFile} id={file.name}>
                                            {file.name}
                                        </span>
                                        <div>
                                            <img src='../assets/icons/trash.svg' id={file.name} onClick={FileDelete} />
                                            {/* <img src='../assets/icons/pencil.svg' /><br /> */}
                                        </div>


                                    </div>
                                )
                            })
                        }

                        <form className='newLink' style={heigth} autoComplete='off' onSubmit={createFileEvent}>
                            <InputCrud type='text' name='nameFile' placeholder='name' />
                            <input type='hidden' value={id} name='courseId' style={{ display: 'none' }} />
                            <InputCrud type='file' name='miFile' placeholder='file' required accept='.pdf' />
                            <button>Create</button>
                        </form>
                    </article>
                </div>
            </ListLink>

        </>
    )
}



export default FileList;