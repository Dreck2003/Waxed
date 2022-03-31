import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  min-height: 100vh;
  position: relative;
  /* display: flex; */
  background-color: #5088a7;

  main {
    height: 90vh;
    min-height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    div.cards {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-around;
    }
    padding: 10px;
    /* background-color: #d4d5d6; */
    /* grid-column: 1/2; */

    span {
      color: white;
      position: absolute;
      margin: auto;
      /* color:white; */
    }
  }
`;