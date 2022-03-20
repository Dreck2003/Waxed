import {useParams} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import {Container,Content} from './styCourse';
import Links from './Links/listas';
import {useEffect} from 'react';
import { getCourseDetail } from '../../redux/actions/courseDetail';
import { State } from '../../redux/reducers';
import { cleanFileData } from '../../redux/actions/file';

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


    useEffect(() =>{

        dispatch(getCourseDetail(id as string));

        return ()=>{
            console.log('se desmontara el componente curso!');
            dispatch(cleanFileData())
        }

    },[])

    return(
        <Container>
            <Nav/>
            <Content>
                <Links />
                {console.log('seeFile', archivo)}
                <section className="item-grid">
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
}
export default Course;