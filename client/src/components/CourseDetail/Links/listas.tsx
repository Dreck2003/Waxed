
import {Container} from './styLinks';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';

import ListLink from './ListLink';
import ListFile from './ListFiles';



const Links=():JSX.Element=>{

    const estado=useSelector((state:State)=>state.courseDetail)
    console.log(estado)

    // const namesOfLinks=estado.links;


    return(
        <Container className="item-grid">
            <ListLink  nameTitle='links' />
            <ListFile  nameTitle='Files' />
            <hr/>

        </Container>
    )
}


export default Links;