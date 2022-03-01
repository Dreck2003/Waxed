import styled from 'styled-components';

export const Course=styled.section`
    width:300px;
    height:380px;
    margin:20px 5px;
    border-radius: 13px;
    overflow:hidden;
    background-color:white;
    cursor:pointer;
    position:relative;
    
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

export const Informer =styled.aside`
    width:95%;
    margin:10px 2.5%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;

    h3{
        width:100%;
        font-weight: bold;
    }
    .description{
        width:100%;
        margin-top:10px;
        max-height: 130px;
        overflow: hidden;

    }
`

export const Visto=styled.footer`
    position: absolute;
    text-align: center;
    bottom: 0;
    width:100%;
    height:40px;
    background-color: #ededed;
    padding:5px 10px;
`