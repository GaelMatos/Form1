import { styled } from "styled-components";

 export const Title = styled.h1`
 color :blueviolet;
 &:first-child{
    color: brown;
 }

`

;

export const Button = styled.button`
display: inline-block;
line-height: 46px;
background-color :blueviolet;
border: 0;
padding: 0 26px;
color: #fff;
&:hover {
background-color: greenyellow;
}
`;