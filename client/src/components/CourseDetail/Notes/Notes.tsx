import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateSummary } from '../../../redux/actions/courseDetail';
import { State } from '../../../redux/reducers';
import {ContainerNotes, NoteText} from './Notas';


const Notes=():JSX.Element=>{

    const [text,setText]=useState<string>('');
    const {id}=useParams();
    const dispatch=useDispatch();
    const notas=useSelector((state:State)=>state.courseDetail.summary);
    const state=useSelector((state:State)=>state.courseDetail);
    // let notas='hola-rata'

    useEffect(()=>{

        setText(notas);
        console.log('las notas: ',notas)
        
        return ()=>{
            console.log('summary desmontado!');
            console.log(text);
        }

    },[notas]);

    const sumText=(event:any)=>{
        event.preventDefault();
        console.log(event.target.value);
        console.log('text: ',text);
        dispatch(updateSummary(Number(id), event.target.value))
        setText(event.target.value);
    }

    return(
        <>
            <ContainerNotes >
                {console.log(state)}
                {console.log('notas renderizadas: ',text)}
                <header>
                    Summary
                </header>
                <NoteText >
                    <textarea onBlur={sumText} defaultValue={text}>
                    </textarea>                    
                </NoteText>
            </ContainerNotes>

        </>
    )
}

export default Notes;