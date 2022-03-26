import styled from "styled-components";

export const ContainerList = styled.div`
  width: 96%;
  margin: 0px 2%;
  height: 400px;
  /* background-color:blue; */
  border: 3px dashed blue;
  color: white;
`;

export const ListLink = styled.div`
  margin-top: -50px;
  width: 96%;
  height: 300px;
  /* border: 2px solid blue; */

  .listFormLinks {
    width: 100%;
    height: 100%;
  }

  

  .container_links {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr;
    pointer-events: auto;
    color: white;
    height: 40px;
    align-items: center;
    a {
      margin-right: 20px;
      text-decoration: none;
      color: white;
    }

    img {
      margin: 0px 5px;
      cursor: pointer;
    }
    span {
      cursor: pointer;
    }
  }

  .container_links:hover {
    background-color: #458db5;
  }

  .newLink {
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-color: #6083b2cc;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    input[type="file"]{
      padding: 0;
      margin: 20px 0px;
    }

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

export const Headers = styled.header`
  width: 100%;
  /* height: 30px; */
  padding: 7px 0px;
  display: flex;
  justify-content: space-evenly;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: #2b6e93;

  img {
    cursor: pointer;
  }
`;
