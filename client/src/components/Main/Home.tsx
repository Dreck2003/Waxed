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
    const estado = useSelector((state: State) => state.courses);
    const user = useSelector((state: State) => state.user);

    useEffect(()=>{
        console.log('traer cursos: ',user?.userName);
        dipatch(getCourses(user!.userName))

    }, [])
        // debugger;
    return(
        <Container>
            {console.log('home renderizado')}
            <Nav/>
            {console.log('el estado de los cursos es: ',estado)}
            <main>

                <div className='cards'>
                    {estado && estado.length ? estado.map((curso:any) => {
                        // console.log(curso)
                        return (
                            <Card key={curso.name} img={curso.img!} info={curso.content!} name={curso.name!} date={curso.date} id={curso.id}/>
                        )
                    })
                        :
                        <span>You don't have spaces </span>
                    }
                </div>
            </main>
        </Container>
    )

}

export default Home;