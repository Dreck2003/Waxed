import Nav from '../Nav/Nav';
import Card from '../CardCourse/Card';
import {Container} from './styHome';
import { useEffect,useContext } from 'react';
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';


const Home =():JSX.Element=>{

    const context =useContext(AuthContext);
    console.log(context);
    const navigate=useNavigate();

    useEffect(()=>{

        if(!context.user){
            console.log(context)
            console.log('usuario no registrado')
            navigate('/')

        }
    },[context])

    return(
        <Container>
            {console.log(context)}
            <Nav/>
            <main>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </main>
        </Container>
    )

}

export default Home;