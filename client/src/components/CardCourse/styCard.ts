import styled from 'styled-components';

export const Course = styled.section`
  width: 280px;
  height: 360px;
  margin: 20px 5px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #d7e2e8;
  /* cursor: pointer; */
  position: relative;

  b{
    position: absolute;
    top:-5px;
    right:5px;
    z-index: 5;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
  }

  .imagen {
    width: 100%;
    height: 180px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
      transition: transform 0.5s ease, opacity 0.5s ease;
      cursor: pointer;
      /* opacity: 0.94; */
      &:hover {
        transform: scale(1.1);
        /* opacity: 1; */
      }
    }
    .encima {
      color: white;
      font-weight: bold;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const Informer =styled.aside`
    width:95%;
    margin:10px 2.5%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;

    h3{
        width:100%;
        font-weight: bold;
        text-align: center;
    }
    .description{
        width:100%;
        margin-top:10px;
        max-height: 130px;
        overflow: hidden;

    }
`

export const Visto=styled.footer`
    position: absolute;
    text-align: center;
    bottom: 0;
    width:100%;
    height:40px;
    background-color: #ededed;
    padding:5px 10px;
`