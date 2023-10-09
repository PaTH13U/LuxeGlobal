import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall=styled(Image)`
    height:64px;
    width:64px;
`
export const WrapperStyleColImage=styled(Col)`
    display:flex;
    flex-basis:unset;
`
export const WrapperStyleNameProduct=styled.h1`
    margin:0 0 4px;
    color:rgb(36,36,36);
    font-size:24px;
    font-weight:300;
    line-height:32px;
    word-break:break-word;
`
export const WrapperStyleTextSell=styled.span`
    color:rgb(120,120,120);
    font-size:15px;
    line-height:25px;
`
export const WrapperPriceProduct=styled.div`
    background:rgb(250,250,250);
    border-radius:4px;
`
export const WrapperPriceTextProduct=styled.h1`
    margin-left:8px;
    font-size:32px;
    font-weight:500;
    line-height:40px;
    margin-top:10px;
`
export const WrapperAddressProduct=styled.div`
    
span.address{
    font-size:19px;
    font-weight:500;
    line-height:24px;
    text-decoration:underline;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsisl;
    margin-left:5px;
}
span.change-address{
    font-size:16px;
    font-weight:500;
    line-height:24px;
    color:rgb(11,116,229);
    flex-shrink:0;
}
`
export const WrapperQuanlityProduct=styled.div`
    display:flex;
    gap:10px;
    align-items:center;
    border-radius:4px;
    width:120px;
    border:1px solid #ccc;
    margin:15px;
    padding:2px;
`

export const WrapperInputNumber=styled(InputNumber)`
    &.ant-input-number.ant-input-number-sm {
        width:60px;
        border-top:none;
        border-bottom:none; 
        
        .ant-input-number-handler-wrap{
            display:none;
         }
         .ant-input-number-input{
            text-align: center;
         }
    }
`
   
   