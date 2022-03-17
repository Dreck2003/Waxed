import styled from "styled-components";


export const List = styled.div`
  .list {
    display: flex;
    flex-direction: column;
    /* overflow-y: scroll; */
    overflow-x: hidden;
    position: relative;
    /* height: auto; */
    /* max-height: 200px; */
    width: 100%;

    @keyframes open {
      0% {
        height: 0px;
      }
      50% {
        height: 100px;
      }
      100% {
        height: 200px;
      }
    }
    @keyframes cerrar {
      0% {
        height: 200px;
      }
      50% {
        height: 100px;
      }
      100% {
        height: 0px;
      }
    }

    .container_links{
      /* display: flex;
      justify-content: center; */
      display: grid;
      grid-template-columns: 2fr 1fr;

      a{
        margin-right: 20px;
      }

      img {
        margin: 0px 5px;
        cursor:pointer;
        
      }

      span{
        cursor:pointer;
      }
    }


  }

  .newLink {
    position: absolute;
    width: 100%;
    background-color: red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    
    /* height: 100%; */
    button{
      outline:none;
      border: none;
      cursor:pointer;
      font-size: 0.9rem;
      padding: 4px 8px;
      border-radius: 5px;
    }


    
  }
`;

export const InputCrud = styled.input`
  width: 80%;
  height: 20px;
  margin: 10px 0px;
  outline: none;
  border: none;
  padding: 14px 10px;
  border-radius: 4px;
`;