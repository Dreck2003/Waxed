
import ListLink from './ListLink';
import {Container,Link} from './styLinks';

const a:string[]=['https://www.sistrix.es/preguntale-a-sistrix/que-es-un-html-anchor/','https://www.carlrippon.com/react-children-with-typescript/','https://www.youtube.com/',
    'https://www.sistrix.es/preguntale-a-sistrix/que-es-un-html-anchor/','https://www.carlrippon.com/react-children-with-typescript/','https://www.youtube.com/',
    'https://www.sistrix.es/preguntale-a-sistrix/que-es-un-html-anchor/','https://www.carlrippon.com/react-children-with-typescript/','https://www.youtube.com/',
    'https://www.sistrix.es/preguntale-a-sistrix/que-es-un-html-anchor/','https://www.carlrippon.com/react-children-with-typescript/','https://www.youtube.com/'
]


const Links=():JSX.Element=>{


    return(
        <Container className="item-grid">
            <ListLink  links={a}/>
            <ListLink  links={a}/>
            
        </Container>
    )
}







export default Links;