import React, { useState } from "react";
import {
  CloseFlex,
  InputFlex,
  InputItems,
  Modal,
  ModalContent,
} from "../StyledComponents/MissingModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Button from "../StyledComponents/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/slices/ProductsSlice";

const AddModal = ({ handleAddModal, setHandleAddModal }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    price: "",
    total: "",
    quantity: "",
    status: "",
  });

  const handleInput = (e)=>{
    setProduct({
      ...product,
      [e.target.name]:e.target.value
    })
    console.log(product);
  }
  const fixModal = (e) => {
    e.stopPropagation();
  };

  const addNewProduct = () => {
    dispatch(addProduct(product))
    setHandleAddModal(false)
  };
  return (
    <div>
      {handleAddModal && (
        <Modal onClick={fixModal} style={{ alignItems: "flex-start" }}>
          <ModalContent>
            <CloseFlex>
              <h3>Add New Product</h3>
              <div onClick={() => setHandleAddModal(!handleAddModal)}>
                <CloseRoundedIcon />
              </div>
            </CloseFlex>
            <InputFlex>
              <InputItems>
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" name="productName" value={product.productName} onChange={handleInput} required/>
              </InputItems>
              <InputItems>
                <label htmlFor="brand">Brand</label>
                <input type="text" id="brand" name="brand" value={product.brand} onChange={handleInput} required/>
              </InputItems>
              <InputItems>
                <label htmlFor="name">Price</label>
                <input type="number" id="price" name="price" value={product.price} onChange={handleInput} required/>
              </InputItems>
              <InputItems>
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" name="quantity" value={product.quantity} onChange={handleInput} required/>
              </InputItems>
              <InputItems>
                <label htmlFor="total">Total</label>
                <input type="text" id="total" name="total" value={product.total} onChange={handleInput} required/>
              </InputItems>
              <InputItems>
                <label htmlFor="status">Status</label>
                <input type="text" id="status" name="status" value={product.status} onChange={handleInput} required/>
              </InputItems>
              <Button
                onClick={addNewProduct}
                style={{ width: "100px", textAlign: "center" }}
              >
                Add Product
              </Button>
            </InputFlex>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default AddModal;
