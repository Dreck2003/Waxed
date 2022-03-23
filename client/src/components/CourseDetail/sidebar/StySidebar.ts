import styled from 'styled-components';


export const SectionBar = styled.section`
  width: 100%;
  height: 100%;
  position: sticky;
  left: 0;
  bottom: 0;
  background-color: #2b6e93;
  color: white;
`;
export const ListItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 40px 0px;
  /* position: relative; */

  li {
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid #6091ab;
    img {
      padding-right: 5px;
    }
    span {
      font-weight: bold;
      margin-right: 5px;
    }

    &:hover {
      cursor: pointer;
    }
  }

`;

export const Avatar = styled.div`
  /* border: 1px solid red; */
  width: 120px;
  margin: 30px 10px;
  height: 140px;
  text-align: center;
  box-sizing: border-box;
  div {
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
    height: 120px;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  span{
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  
`;

