import styled from 'styled-components';

export const Course=styled.section`
    width:300px;
    height:380px;
    margin:20px 5px;
    border-radius: 13px;
    overflow:hidden;
    background-color:white;
    cursor:pointer
    ;
    .imagen {
        width:100%;
        height:150px;
        position:relative;


        img{
            width:100%;
            height:100%;
            aspect-ratio:16/9;
            transition:transform 0.5s ease;


            &:hover{
                transform:scale(1.1)
            }
        }
        .encima{
            color:white;
            font-weight: bold;
            position:absolute;
            top:50%;
            left:50%;
            transform: translate(-50%, -50%);
        }
    }
    
`