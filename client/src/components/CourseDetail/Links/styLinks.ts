import styled from 'styled-components';



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
    .icons{
        padding: 0px 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img{
            margin: 0px 8px;
        }
    }
    //EStilos del desplegable
    .containerList{
        position: relative;
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

