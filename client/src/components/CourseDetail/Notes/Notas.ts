import styled from 'styled-components';

export const ContainerNotes = styled.section`
  width: 92%;
  margin: 20px 4%;
  height: 500px;
  /* border: 1px solid red; */
  color: white;

  header {
    font-weight: bold;
    text-align: center;
    padding: 7px 0px;
    font-size: 1.2rem;
    background-color: #2b6e93;
  }

  div::-webkit-scrollbar{
      width: 0px;
  }
  

`;

export const NoteText = styled.div`
  width: 100%;
  height: 100%;
  background-color: #35789d;
  overflow: hidden;
  overflow-y: scroll;
  main {
    width: 100%;
    min-height: 100%;
    padding: 5px;
    outline: none;
    border-radius: 1%;
    box-sizing: border-box;
  }
  main:focus {
    border: 3px solid #7196aa;
  }
`;