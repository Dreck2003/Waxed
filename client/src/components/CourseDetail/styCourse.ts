import styled from 'styled-components';


export const Content=styled.main`
    width:100%;
    height:100%;
    /* border:1px solid black; */
    display: grid;
    grid-template-columns: 250px 2fr;
    /* grid-template-rows: 150px 150px 150px auto; */
    
    .item-grid{
        &:nth-child(1){
            grid-row:1/3;
            background-color: #9cb0c7;
        }
        &:nth-child(2){
            grid-row:1/3;
        }
       
    }

`;

export const Container=styled.div`
    width: 100%;
    height: 90vh;
    min-height:90vh;
`;

export const  Div=styled.div`
    width:100%;
    height: 100%;
    /* background-color:red; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* border:1px solid black;
     */
        
    

`

