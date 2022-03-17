import Nav from '../Nav/Nav';
import Card from '../CardCourse/Card';
import {Container} from './styHome';
import { useEffect} from 'react';
import {Course} from '../../interfaces/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../redux/actions/course';
import {State} from '../../redux/reducers/index';


const Home =():JSX.Element=>{

    const dipatch=useDispatch();
    const estado=useSelector((state:State)=>state.courses);


    useEffect(()=>{

        dipatch(getCourses())

    }, [])
        // debugger;
    return(
        <Container>
            {console.log('home renderizado')}
            <Nav/>
            <main>

                {estado ? estado.map((curso,index)=>{
                    // console.log(curso)
                        return(
                            <Card key={index} img={curso.img!} info={curso.content!} name={curso.name!} actualizado={curso.lastSeen}/>
                        )
                    })
                    :
                        <span>You don't have courses </span>
                }
            </main>
        </Container>
    )

}

export default Home;