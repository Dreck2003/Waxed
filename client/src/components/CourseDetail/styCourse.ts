import styled from 'styled-components';


export const Content = styled.main`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100px 2fr;

  .item-grid {
    &:nth-child(1) {
      grid-row: 1/3;
      background-color: #9cb0c7;
    }
    &:nth-child(2) {
      grid-row: 1/3;
    }
  }
`;

export const Container=styled.div`
    width: 100%;
    /* height: calc(100vh - 30px); */
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

