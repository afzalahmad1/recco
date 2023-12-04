import React from "react";
import Button from '../StyledComponents/Button'
import { ButtonFlex, OrderFlex } from "../StyledComponents/Order";



const Order = () => {
   

  return (
    <div style={{ boxShadow: "0px 0px 20px -2px gray"}}>
        <div style={{ padding: ".6rem 5rem" }}>
      <div style={{ color: "gray" }}>
        {" "}
        Orders {">"}{" "}
        <span style={{ textDecoration: "underline" }}>Order 32457ABC</span>
      </div>
      <OrderFlex>
        <h3>Order 32457ABC</h3>
        <ButtonFlex>
            <Button data="white">Back</Button>
            <Button data="green">Approve order</Button>
        </ButtonFlex>
      </OrderFlex>
    </div>
    </div>
  );
};

export default Order;
