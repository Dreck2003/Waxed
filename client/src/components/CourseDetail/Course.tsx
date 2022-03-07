import Nav from '../Nav/Nav';
import {Container,Content} from './styCourse';
import Links from './Links/Links';
import pdf from "/assets/react.pdf"

const Course=():JSX.Element=>{

    return(
        <Container>
            <Nav/>
            <Content>
                <Links/>
                <section className="item-grid">
                    <embed
                    type="application/pdf"
                    src={pdf}
                    style={{width: '100%',height: '100%'}}

                    ></embed>
                </section>
            </Content>
        </Container>
    )
}
export default Course;