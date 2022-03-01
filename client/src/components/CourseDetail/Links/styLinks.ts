import styled,{keyframes} from 'styled-components';



export const Container=styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    h3{
        width: 100%;
        height: 30px;
        background-color:gray;
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
       span:hover{
           color:white;
       } 
       span{
           cursor:pointer;
       }
       img{
           cursor:pointer;
       }
       
       
    }

    .list{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
        height:200px;
        width:100%;

        @keyframes open{
            0%{
                height:0px;
                
            }
            50%{
                height:100px;
                

            }
            100%{
                height:200px;

            }
        };
        @keyframes cerrar{
            0%{
                height:200px;
                
            }
            50%{
                height:100px;
                

            }
            100%{
                height:0px;

            }
        };

        
    }

`

export const Link=styled.a`
    width:100%;
    height:30px;
    color:white;
    background-color:red;
    margin-top:5px;
    /* background-color:red; */
`

