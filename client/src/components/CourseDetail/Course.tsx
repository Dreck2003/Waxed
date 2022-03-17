import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';
import {Container,Content} from './styCourse';
import Links from './Links/listas';
import {useEffect} from 'react';
import { getCourseDetail } from '../../redux/actions/courseDetail';
import localforage from 'localforage';

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


    useEffect(() =>{

        dispatch(getCourseDetail(id as string));


    },[])

    return(
        <Container>
            <Nav/>
            <Content>
                <Links />
                <section className="item-grid">
                    <object
                        type=''
                        data=''
                    >
                    </object>
                </section>
            </Content>
        </Container>
    )
}
export default Course;