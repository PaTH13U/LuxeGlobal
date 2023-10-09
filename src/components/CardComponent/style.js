import { Card } from "antd";
import { styled } from "styled-components";


export const WrapperCardStyle=styled(Card)`
width:200px;
& img {
     height:250px;
     width:200px;
    },
    position:relative;

`



export const StyleNameProduct=styled.div`
font-weight:400;
font-size:12px;
line-height:16px;
color:rgb(56,56,61);
font-weight:400;

`   
export const WrapperReporText= styled.div`
    font-size:12px;
    display:flex;
    color:rgb(128,128,137);
    align-items:center;
    margin:8px 0;
`

export const WrapperPriceText= styled.div`
    font-size:16px;
    font-weight:500;
    color:rgb(255,66,78);
    margin:8px 0;
`
export const WrapperPriceDisContText= styled.span`
    font-size:12px;
    font-weight:500;
    color:rgb(255,66,78);
    
`
export const WrapperStyleTextSell=styled.span`
color:rgb(120,120,120);
font-size:15px;
line-height:25px;
`