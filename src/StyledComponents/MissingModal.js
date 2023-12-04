import styled from "styled-components";

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  /* border: 2px solid black; */
  background-color: 2px solid black;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 1.5rem;
  border-radius: 9px;
  min-width: 20rem;
`;
const CloseFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;
const ConfirmFlex = styled.div`
display:flex;
justify-content:flex-end;
align-items;center;
gap:1.5rem;
// border:1px solid red;
`;
const ProductStatus = styled.div`
  padding: 0.4rem 1rem;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) =>
    props.data === "approve"
      ? "#3dca72"
      : props.data === "missing"
      ? "#f66d44"
      : props.data === "missing-urgent"
      ? "#db2114"
      : ""};

      border: ${(props) =>
        props.data === "approve"
          ? "1px solid #3dca72"
          : props.data === "missing"
          ? "1px solid #f66d44"
          : props.data === "missing-urgent"
          ? "1px solid #db2114"
          : ""};

`;

const InputFlex = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
row-gap: .8rem;
`
const InputItems = styled.div`
display:flex;
flex-direction:column;
row-gap: .2rem;
input{
  padding: .2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline:none;
}
`

export { CloseFlex, ModalContent, Modal, ConfirmFlex, ProductStatus ,InputFlex,InputItems};
