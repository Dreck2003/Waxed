import styled from 'styled-components';

export  const Formulario=styled.section`
    color:white;
    background-color: #5a8bc3;
    border-radius: 20px;
    width:400px;
    /* height: 80vh; */
    box-shadow: 0px 0px 10px 5px #7caae0;
    position: relative;
    overflow: hidden;
    transition: all 1s ease;
    

    button{
        width:80%;
        margin: 10px 10% 60px 10%;
        border:none;
        border-radius: 8px;
        padding:5px;
        background-color:#ebdda4;
        color:white;
        font-weight:bold;
        cursor:pointer;
    }

    .google{
        opacity:0;
    }

`

export const Header=styled.h3`
    margin-top:10px;
    text-align:center;
    padding-top:10px;
    font-size: 1.5em;
`

export const Input = styled.input`
    padding:5px 10px ;
    height:40px;
    border-radius: 10px;
    margin:5px;
    border:none;
    outline: none;
    width: calc(100% - 10px);
`

export const GroupRow = styled.div`
  margin-top: 20px;
  /* width: 96%; */
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  div {
    width: 100%;
    position: relative;
    b {
      position: absolute;
      right: 0;
      color: red;
      visibility: hidden;
      transform: translate(-300%, 50%);
    }
  }
`;

export const GroupCol=styled.div`
    padding:5px 0px;
    width:96%;
    margin:10px 2%;
    display: flex;
    flex-direction: column;
    div{
        width: 100%;
        position: relative;
        b{
            position: absolute;
            right: 0;
            color: red;
            visibility: hidden;
            transform: translate(-300%,50%);
        }
    }
    
`

export const ChangeForm=styled.div`
    position: absolute;
    bottom: -30px;
    width: 100%;
    height: 90px;
    background-color: #a4d2eb;
    border-radius: 30%;
    text-align: center;
    padding-top:15px;
    font-weight: bold;
    font-size: 1.5rem;
    cursor:pointer;
    
`