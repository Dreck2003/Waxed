import styled from 'styled-components';

export const Course = styled.section`
  width: 290px;
  height: 380px;
  margin: 20px 5px;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  position: relative;

  .imagen {
    width: 100%;
    height: 200px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 16/9;
      transition: transform 0.5s ease, opacity 0.5s ease;
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