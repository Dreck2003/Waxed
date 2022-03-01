import {useState} from 'react';


interface List{
    links:string[]

}
interface Estilos{
    visible:string,
    height:string;
    display?: string;
    animation?:string,
}

const ListLink=({links}:List):JSX.Element=>{

    const [visible,setVisible]=useState<boolean>(false);
    
    let estilos:Estilos;
    estilos=visible ? estilos={visible:'block',height:'200px',animation:'open 0.5s linear'}:estilos={visible:'block',height:'0px',animation:'cerrar 0.5s linear',}

    return(
        <>
        <h3 >
            <span onClick={()=>setVisible(!visible)}>Links</span>
            <img src='../assets/icons/trash.svg'/>
            <img src='../assets/icons/pencil.svg'/>

        </h3>
        <div className="list" style={estilos}>
            {links && links.map((link,i) =>{
                let color='#b5abab';

                if(i% 2==0) color='#ecdcdc'; 

                return(
                    <div key={i} style={{backgroundColor:color,width:'100%'}}>
                        <a href={link}  target='_blank'>
                            texto
                        </a><br/>
                    </div>
                )
            })}

        </div></>
        
    )
}

export default ListLink;