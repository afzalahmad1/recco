import styled from "styled-components";

const Container = styled.div`
background-color: #fff;
margin: 0rem 6rem;
border: 1px solid #ddd;
border-radius: 5px;
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  border-radius: 10px;
  font-size:12px;
//   border:1px solid #ddd;
  margin: 1rem 3rem; 
}
th,
td {
  border-bottom: 1px solid #ddd;
  padding: 16px;
  
}

tr:hover {
  background-color: #ddd;
  
}
th {
  padding: 16px;
  padding-bottom: 16px/;
  text-align: left;
}
thead{
    border:1px solid #ddd;
    
}
img{
    width:30px
}
`;
const SearchFlex = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
// border:2px solid red;
padding: 1rem 2rem;
`;
const Search = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
border: 1px solid #ddd;
width: 300px;
padding: 0.4rem 1rem;
border-radius: 30px;
input {
  border: none;
  outline: none;
  width: 280px;
}
`;
const ButtonFlex = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
column-gap: 1.5rem;
`;

export {Container,ButtonFlex,Search,SearchFlex}