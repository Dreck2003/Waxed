import { useSelector } from 'react-redux';
import { State } from '../../../redux/reducers';
import {ContainerNotes, NoteText} from './Notas';


const Notes=():JSX.Element=>{

    const notas=useSelector((state:State)=>state.courseDetail.summary);

    return(
        <>
            <ContainerNotes >
                <header>
                    Summary
                </header>
                <NoteText >
                    <main contentEditable='true' onBlur={()=>{console.log('pierde el foco?')}}>
                        {notas}
                    </main>                    
                </NoteText>
            </ContainerNotes>

        </>
    )
}

export default Notes;