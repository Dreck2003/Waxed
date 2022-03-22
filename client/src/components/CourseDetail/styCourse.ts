import styled from 'styled-components';


export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 300px auto;
  background-color: #5b6066;

  .item-grid {
    &:nth-child(1) {
      grid-row: 1/3;
      background-color: #9cb0c7;
    }
    &:nth-child(2) {
      grid-row: 1/3;
    }
    &:nth-child(3) {
      grid-row: 1/3;
    }
  }

  .viewSidebar {
    background-color: #869bb3;
  }
  .object{
    grid-column: 3/4;
  }
`;

export const Container=styled.div`
    width: 100%;
    min-height:90vh;
    height: 100vh;

`;

export const  Div=styled.div`
    width:100%;
    height: 100%;
    /* background-color:red; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border:1px solid black;
     */        
`
export const ViewFields = styled.section`
  /* display: none; */
  position: absolute;
  top: 0;
  left: 100px;
  height: 99vh;
  width: 300px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9cb0c7;
  /* pointer-events: none; */
`;

