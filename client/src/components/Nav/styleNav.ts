import styled from 'styled-components';

export const Navegator = styled.nav`
  color: white;
  width: 100%;
  height: 60px;
  background-color: #2b6e93;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  /* grid-column: 1/3; */
`;
