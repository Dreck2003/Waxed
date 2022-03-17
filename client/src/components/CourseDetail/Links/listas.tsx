
import {Container} from './styLinks';
import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';

import ListLink from './ListLink';
import ListFile from './ListFiles';



const Links=():JSX.Element=>{

    const estado=useSelector((state:State)=>state.courseDetail)
    console.log(estado)

    const namesOfLinks=estado.links;
    const namesOfFiles=estado.files;


    return(
        <Container className="item-grid">
            <ListLink links={namesOfLinks} nameTitle='links' />
            <ListFile files={namesOfFiles} nameTitle='Files' />

        </Container>
    )
}


export default Links;