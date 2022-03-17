import { useState } from 'react';
import {List} from './links';
import {  Archive } from '../../../redux/interface';

interface List {
    files: Archive[]
    nameTitle: string
}


interface Estilos {
    visible: string,
    height: string;
    display?: string;
    animation?: string,
}

const ListLink = ({ files, nameTitle }: List): JSX.Element => {

    const [visible, setVisible] = useState<boolean>(false);


    let estilos: Estilos;
    estilos = visible ? estilos = { visible: 'block', height: '200px', animation: 'open 0.5s linear' } : estilos = { visible: 'block', height: '0px', animation: 'cerrar 0.5s linear', }

    return (
        <div className='containerList'>
            <h3>
                <span onClick={() => setVisible(!visible)}>{nameTitle}</span>
                {visible ?
                    <div className="icons">
                        <img src='../assets/icons/trash.svg' />
                        <img src='../assets/icons/pencil.svg' />
                        <img src='../assets/icons/add.svg' />
                    </div>
                    :
                    null
                }
            </h3>
            <List>
                <div className="list" style={estilos}>

                    {
                        files.map((file: Archive, i: number) => {
                            let color = '#b5abab';

                            if (i % 2 == 0) color = '#ecdcdc';

                            return (
                                <div style={{ backgroundColor: color, width: '100%' }}>

                                    <span>
                                        {file.name}span
                                    </span>

                                    <br />

                                </div>
                            )


                        })
                    }

                </div>
            </List>
        </div>

    )
}

export default ListLink;