import styled from 'styled-components';

export const TodoBar = styled.section`
    width: 100%;
    background-color:#2b6e93;
    /* height: 100%; */
    /* grid-column: 2/3; */
`;

export const Header=styled.header`
    width: 100%;
    height: 30px;
    text-align: center;
    background-color:red;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(43, 110, 147);
  justify-content: center;
  align-items: center;
`;

export const Content = styled.article`
  width: 60%;
  /* margin: 10px 5%; */
  height: 400px;
  border: 1px solid white;
  color: white;
  border-radius: 8px;
  padding: 10px;
  background-color: #3e80a5;
  z-index: 10;

  header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 80px;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 10px;

    button {
      border: none;
      border-radius: 5px;
      /* height:20px; */
      width: 25px;
      height: 25px;
      margin-left: 55px;
      font-size: 0.8rem;
      font-weight: bold;
      cursor: pointer;
      background-color: #6a98b2;
      color: #07454b;
    }
  }
  .scroll::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .scroll::-webkit-scrollbar:vertical {
    width: 8px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background-color: #819baa;
    border-radius: 20px;
    border: 1px solid #f1f2f3;
    margin-left: 10px;
  }
`;
export const List = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  /* border: 2px solid red; */
  align-items: center;
  padding: 5px 0px;
  gap: 5px;
  margin: 5px 0px;
  padding-right: 10px;
  background-color: #3e80a5;

  div {
    width: 100%;
    height: 100%;
    display: grid;
    height: 40px;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    border: 2px solid white;
    border-radius: 6px;

    /* text-decoration: line-through; */
    /* opacity: 0.7; */
    span {
      cursor: pointer;
    }

    img {
      cursor: pointer;
    }
  }
  div:focus {
    text-decoration: line-through;
    /* background-color:red; */
  }
  span.not {
    position: absolute;
    margin: auto;
    transform: translate(210%, 50%);
  }
`;

export const Aside = styled.form`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 1fr 80px;
  input {
    margin: 2px 10px;
    padding-left: 10px;
    height: 33px;
    outline: none;
    border-radius: 5px;
    border: none;
    background-color: #f6fcff;
    letter-spacing: 1.5px;
    color: #434548;
  }
  input:focus {
    border: 2px solid #74b0d1;
  }
  button {
    height: 33px;
    margin: 2px 10px;
    background-color: #f6fcff;
    border: none;
    border-radius: 5px;
    color: #0d69ea;
    font-size: 0.7rem;
    border: 1px solid white;
    cursor: pointer;
  }
`;