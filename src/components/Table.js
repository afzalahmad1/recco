import React from "react";
import Button from "../StyledComponents/Button";
// import Apple from "../assets/Apple.png"
import Avacado from "../assets/Avocado.jpg";
import { Container, Search, SearchFlex } from "../StyledComponents/Table";
import { ButtonFlex } from "../StyledComponents/Order";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { LogoFlex } from "../StyledComponents/Bar";
import LocalPrintshopRoundedIcon from "@mui/icons-material/LocalPrintshopRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ProductStatus } from "../StyledComponents/MissingModal";
import { updateStatus } from "../store/slices/ProductsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Table = ({ setHandleModal, setIndex ,setHandleAddModal}) => {
  const dispatch = useDispatch();
  const produtcs = useSelector((state) => {
    return state.products;
  });

  function handleApprove(id) {
    // console.log("Table", produtcs[id].status);
    dispatch(
      updateStatus({
        id: id,
        status: "approve",
      })
    );
  }
  function handleMissing(id) {
    // showing modal
    setHandleModal(true);
    // setting index for modal
    setIndex(id);
  }
  const addNewProduct = () => {
    // console.log("in Table");
    setHandleAddModal(true);
  };
  return (
    <Container>
      <SearchFlex>
        <Search>
          <input type="text" placeholder="Search...." />
          <SearchRoundedIcon color="disabled"/>
        </Search>
        <ButtonFlex>
          <Button onClick={addNewProduct}>Add Item</Button>
          <LocalPrintshopRoundedIcon />
        </ButtonFlex>
      </SearchFlex>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {produtcs.map((item, idx) => {
            return (
              <tr key={idx} id={idx}>
                <td>
                  <img src={Avacado} alt="table" />
                </td>
                <td>{item.productName}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>
                  <ProductStatus data={item.status}>
                    {item.status}
                  </ProductStatus>
                </td>
                <td>
                  <LogoFlex>
                    <span
                      style={{
                        color:
                          item.status === "approve"
                            ? "green"
                            : item.status === ""
                            ? "black"
                            : "",
                      }}
                      onClick={() => handleApprove(idx)}
                    >
                      <DoneRoundedIcon />
                    </span>{" "}
                    <span
                      onClick={() => handleMissing(idx)}
                      style={{
                        color:
                          item.status === ""
                            ? "black"
                            : item.status === "missing"
                            ? "red"
                            : item.status === "missing-urgent" ? "red": "",
                      }}
                    >
                      <CloseRoundedIcon />
                    </span>{" "}
                    <span>
                      <ModeEditOutlineRoundedIcon />
                    </span>
                  </LogoFlex>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
