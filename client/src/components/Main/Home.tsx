import Nav from '../Nav/Nav';
import Card from '../CardCourse/Card';
import {Container} from './styHome';

const Home =():JSX.Element=>{

    return(
        <Container>
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