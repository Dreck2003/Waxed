import styled from 'styled-components';


export const SectionBar=styled.section`
    width:100%;
    height:100%;
    border:1px solid red;
    position:sticky;
    left:0;
    bottom:0;

`
export const ListItems = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* position: relative; */

  li {
    border: 1px solid red;
    display: flex;
    /* justify-content:center; */
    /* align-items: center; */
    padding: 10px 0px;
    img {
      padding-right: 5px;
    }
    span {
      font-weight: bold;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

