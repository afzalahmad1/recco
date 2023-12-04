import styled from "styled-components";
const Button= styled.div`
background-color: ${(props) =>
    props.data === "green" ? "#1e633f" : "#fff"};
    
    padding: .4rem 1.5rem;
    font-size: 14px;
    font-weight: 400;
    color: ${(props) =>
        props.data === "green" ? "#fff" : "#1e633f"};
    border: 1px solid #1e633f;
    border-radius:30px;
    cursor:pointer;
`
export default Button;