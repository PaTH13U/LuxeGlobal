import { styled } from "styled-components";
import ButtonComponents from "../../components/ButtonComponents/ButtonComponents";

export const WrapperTypeProduct=styled.div`
display:flex;
gap:25px;
justify-content:flex-start;
align-items:center;

height:45px;
`   
export const WrapperButtonMore=styled(ButtonComponents)`
    &:hover{
        color:#fff;
        background:rgb(13,92,182);
        span{
            color:#fff;

        }
    }
    width:100%;
    justify-content:center;
`  
export const WrapperProducts=styled.div`
    display:flex;
    gap:17px;
    margin-top:20px;
    flex-wrap:wrap;
`  