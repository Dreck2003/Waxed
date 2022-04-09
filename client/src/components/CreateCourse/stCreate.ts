import styled from 'styled-components';


export const Aside = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  /* width:400px; */
  height: 700px;
  background-color: #3b5999;
  z-index: 3;
  color: black;
  .btn-close {
    position: absolute;
    top: 3px;
    right: 10px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #f000;
    padding: 5px 5px 0px 5px;
    border-radius: 5px;

  }
  aside {
    transition: width 1s ease;
  }
`;


export const Container=styled.div`
    overflow: hidden;
    span{
        font-weight: bold;
        cursor:pointer;
        /* &:hover{
            color:#c4d2e2;
        } */
    }
`

export const Content = styled.form`
  width: 96%;
  margin: 50px 2%;
  height: 500px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-evenly;
  div.error {
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
  b {
    margin-top: -10px;
    margin-bottom: 10px;
    color: #ce1c1c;
    font-size: 0.9rem;
    animation: changeColor 3s cubic-bezier(0, 0, 0, 1.2) infinite;

    @keyframes changeColor {
      0% {
        text-shadow: #d95252db 0 0px 0px;
      }
      100% {
        text-shadow: #d95252db 0 0px 3px;
      }
    }
  }

  span {
    text-align: center;
    color: white;
  }
  header {
    width: 100%;
    height: 20px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  .btn-crear {
    color: #fff;
    font-weight: bold;
    background: #7283a9;
    border: none;
    cursor: pointer;
    margin: 5px 20px;
    border: 1px solid #ccd2da;
    padding: 6px;
  }
  div {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
      height: 100%;
    }
  }
`;

export const Input = styled.input`
  border: none;
  margin: 10px 1%;
  background-color: #7283a9;
  color: white;
  border-bottom: 2px solid white;
  width: 98%;
  height: 30px;
  outline: none;
  padding: 5px 10px;
  &::placeholder {
    color: white;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  margin: 10px 1%;
  background-color: #7283a9;
  color: white;
  border-bottom: 2px solid white;
  width: 98%;
  max-width: 99%;
  height: 50px;
  max-height: 100px;
  outline: none;
  padding: 5px 10px;
  &::placeholder {
    color: white;
  }
`;

export const SubFile = styled.label`
  width: 150px;
  padding: 10px 5px;
  margin: 10px auto;
  text-align: center;
  border: 2px solid red;
  color: white;
  background-color: #7283a9;
  border: 2px solid white;
  span {
    display: block;
  }

  input {
    display: none;
    visibility: none;
  }
  i {
    font-size: 2rem;
    font-weight: bold;
  }
`;


export const Buttons = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-family: sans-serif;
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
  }
`;