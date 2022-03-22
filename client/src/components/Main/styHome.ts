import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  position: relative;

  main {
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px;
    background-color: #d4d5d6;
    min-height: 100vh;

    span {
      /* color:white; */
    }
  }
`;