import styled from 'styled-components';

export const Calc = styled.main`
  width: 90%;
  height: 400px;
  /* border: 1px solid white; */
  color: white;
  margin: 10px 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border-radius: 15px;
  overflow: hidden;
  gap: 8px;
  padding: 10px;
  background-color: #2b6e93;

  span {
    grid-column: 1/3;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
  }
  .items {
    background-color: #3980aa;
    width: 100%;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
    border-top: 1px solid #376b88;
    border-bottom: 1.5px solid #2a6281;
    border-left: 1px solid #376b88;
    border-right: 1px solid #376b88;
    /* box-shadow: inset -5px -8px 8px 3px rgb(56 108 136),
      inset 0 -8px 8px rgb(133 185 215), 0 0 0 2px rgb(74 125 155),
      0px -1px 25px rgb(30 69 90); */
  }

  .items:active {
    border-top: 1px solid #407a9b;
    border-bottom: 1.5px solid #25526b;
    border-left: 1px solid #3d7796;
    border-right: 1px solid #396076;

    /* box-shadow: inset -1px -5px 8px 3px rgb(56 108 136),
      inset -1px -8px 8px rgb(133 185 215), 0px 1px 0 2px rgb(74 125 155),
      4px 2px 25px rgb(30 69 90); */
  }

  div {
    grid-column: 1/5;
    background-color: #6097b7;
    padding-right: 15px;
    font-size: 1.6rem;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: auto !important;
    border-bottom: 1px solid #407a9b;
    border-top: 1.5px solid #416a81;
    border-left: 1px solid #3d7796;
    border-right: 1px solid #396076;
  }
`;