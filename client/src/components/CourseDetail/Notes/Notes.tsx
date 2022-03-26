import {ContainerNotes, NoteText} from './Notas';


const Notes=():JSX.Element=>{

    return(
        <>
            <ContainerNotes >
                <header>
                    Summary
                </header>
                <NoteText >
                    <main contentEditable='true' onBlur={()=>{console.log('pierde el foco?')}}>

                    </main>
                    
                </NoteText>
            </ContainerNotes>

        </>
    )
}

export default Notes;