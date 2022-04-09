import styled from 'styled-components';

export const Navegator = styled.nav`
  color: white;
  width: 100%;
  height: 60px;
  background-color: #3b5999;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr  1fr;
  align-items: center;
  justify-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  text-align: center;
  /* grid-column: 1/3; */
  i:nth-child(1) {
    width: 100%;
    overflow: hidden;
    font-weight: bold;
    font-size: 1.8rem;
    
    font-family: "Roboto", sans-serif;
    img {
      width: 153px;
      border-radius: 10px;
    }
  }
`;
