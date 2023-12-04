import styled from "styled-components";

const Navbar = styled.div`
    display: flex;
    background-color: #1e633f;
    justify-content: space-between;
    align-items: center;
    flex-flow: row wrap;
    padding: 1rem 5rem;
    color: #fff;
  `;
  const LeftNavbar = styled.div`
    display: flex;
    background-color: #1e633f;
    //   border:1px solid black;
    gap: 3rem;
    justify-content: flex-start;
    align-items: center;
  `;
  const RightNavbar = styled.div`
    display: flex;
    background-color: #1e633f;
    gap: 3rem;
    justify-content: flex-start;
    align-items: center;
  `;
  const Items = styled.div`
    font-size: 15px;
    font-weight: 300;
    cursor:pointer;
  `;
  const Bold = styled.div`
    font-size: 19px;
    font-weight: 900;
    cursor:pointer;
  `;
  export  {Navbar,LeftNavbar,RightNavbar,Items,Bold}