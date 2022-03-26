import Nav from '../Nav/Nav';
import Card from '../CardCourse/Card';
import {Container} from './styHome';
import { useEffect} from 'react';
import {Course} from '../../interfaces/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../redux/actions/course';
import {State} from '../../redux/reducers/index';
import Todo from '../Todo/Todo';


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
            {console.log('el estado de los cursos es: ',estado)}
            <main>

                <div className='cards'>
                    {estado.length ? estado.map((curso) => {
                        // console.log(curso)
                        return (
                            <Card key={curso.name} img={curso.img!} info={curso.content!} name={curso.name!} />
                        )
                    })
                        :
                        <span>You don't have courses </span>
                    }
                </div>
            </main>
        </Container>
    )

}

export default Home;