import { Row } from "antd";
import { styled } from "styled-components";

export const WrapperHeader =styled(Row)`
    padding:10px 120px;
    background-color:rgb(0 140 179);
    align-items:center;
    gap:16px;
    flex-wrap:nowrap;
    width:1340px;
    padding:10px 0;
`
export const WrapperTextHeader =styled.span`
    font-size:25px;
    color:#fff;
    font-weight:bold;
    text-align:left;
`
export const WrapperHeaderAccount =styled.div`
    display:flex;
    align-items:center;
    color:#fff;
    gap:10px;
    font-size:12px;
`
export const WrapperTextHeaderSmall =styled.span`
    font-size:12px;
    color:#fff;
    white-space:nowrap;
`
