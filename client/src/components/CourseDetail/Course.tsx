import {useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import {Container,Content, ViewFields} from './styCourse';
import {useEffect, useState} from 'react';
import { getCourseDetail } from '../../redux/actions/courseDetail';
import { State } from '../../redux/reducers';
import { cleanFileData } from '../../redux/actions/file';
import Sidebar from './sidebar/Sidebar';
import LinkList from './Links/LinkList';
import FileList from './Links/FileList';
import Notes from './Notes/Notes';
import Calculadora from './Calculadora/Calculadora';

interface Course {
    name: string;
    content: string | null;
    img?: string | null;
    // id:number,
    files: string[] | [];
    links: string[] | [];
    lastSeen: Date;
}

const Course=():JSX.Element=>{

    const {id}=useParams();
    const dispatch=useDispatch();
    const archivo=useSelector((state:State)=>state.courseDetail.seeFile);
    const viewSidebar=useSelector((state:State)=>state.courseDetail.viewSidebar);

    useEffect(() =>{

        dispatch(getCourseDetail(id as string));

        return ()=>{
            console.log('se desmontara el componente curso!');
            dispatch(cleanFileData())
        }

    },[])


    return(
        <Container>
            {/* <Nav/> */}
            <Content>
                <Sidebar />
                {console.log('seeFile', archivo)}
                <ViewFields className="item-grid viewSidebar">
                    {changeSideBar(viewSidebar)}
                </ViewFields>
                <section className="item-grid object">
                    <object
                        type='application/pdf'
                        data={archivo.url}
                        style={{width: '100%', height: '100%'}}
                    >
                    </object>
                </section>
            </Content>
        </Container>
    )
};


const changeSideBar=(type:string)=>{

    switch(type){

        case 'links':

            return <LinkList/>

        case 'files':
            return <FileList/>

        case 'calculator':
            return <Calculadora/>;
        
        case 'summary':
            return <Notes/>

        default:
            return <Notes />

    }
}






export default Course;