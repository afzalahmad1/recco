import styled from "styled-components";

const BarFlex = styled.div`
display:flex;
justify-content: space-between;
align-atems:center;
margin: 1rem 0rem;
flex-flow: row wrap;
border: 1px solid #ddd;
border-radius:5px;
padding:1rem 2rem;
background-color: #fff;
`;

const BarItems = styled.div`
display:flex;
flex-flow:column wrap;
font-weight:500;
row-gap:.3rem;
border-right: 1px solid #ddd;
padding-right:2rem;
 &:last-child{
  border-right:none;
 }`;
const LogoFlex = styled.div`
display:flex;
justify-content: flex-start;
align-items:center;
`;
export {BarFlex,BarItems,LogoFlex}