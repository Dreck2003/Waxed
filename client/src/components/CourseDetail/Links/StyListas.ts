import styled from 'styled-components';


export const ContainerList=styled.div`
    width:96%;
    margin: 0px 2%;
    height:400px;
    /* background-color:blue; */
    border:3px dashed blue;
    color:white;

`;

export const ListLink = styled.div`
  margin-top: -50px;
  width: 96%;
  height: 300px;
  border: 2px solid blue;

  .listFormLinks {
    width: 100%;
    height: 100%;
  }

  article {
    position: relative;
    height: calc(100% - 30px);
    overflow: hidden;
    
  }

  .container_links {
    display: grid;
    grid-template-columns: 2fr 1fr;
    pointer-events: auto;
    border-radius: 5px;
    margin: 5px 0px;
    a {
      margin-right: 20px;
    }

    img {
      margin: 0px 5px;
      cursor: pointer;
    }
    span {
      cursor: pointer;
    }
  }

  .newLink {
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-color: red;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* height: 100%; */
    button {
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 0.9rem;
      padding: 4px 8px;
      border-radius: 5px;
    }
  }
`;


export const Headers = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
`;