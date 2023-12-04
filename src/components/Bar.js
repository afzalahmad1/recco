import React from "react";
import { BarFlex, BarItems, LogoFlex } from "../StyledComponents/Bar";




const Bar = () => {


  return (
    <div style={{ margin: "0rem 6rem" }}>
      <BarFlex>
        <BarItems>
          <div style={{color:"rgb(82, 81, 81)",fontWeight:"500", fontSize:"15px"}}>Supplier</div>
          <div>
            East coast fruits <br /> & vegetables
          </div>
        </BarItems>
        <BarItems>
          <div style={{color:"rgb(82, 81, 81)",fontWeight:"300", fontSize:"15px"}}>Shopping date</div>
          <div>Thu, Feb 10</div>
        </BarItems>
        <BarItems>
          <div style={{color:"rgb(82, 81, 81)",fontWeight:"300", fontSize:"15px"}}>Total</div>
          <div>$15,028.3</div>
        </BarItems>
        <BarItems>
          <div style={{color:"rgb(82, 81, 81)",fontWeight:"300", fontSize:"15px"}}>Catagory</div>
          <LogoFlex>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </LogoFlex>
        </BarItems>
        <BarItems>
          <div style={{color:"rgb(82, 81, 81)",fontWeight:"300", fontSize:"15px"}}>Department</div>
          <div>300-444-678</div>
        </BarItems>
        <BarItems>
          <div style={{color:"rgb(82, 81, 81)",fontWeight:"300",fontSize:"15px"}}>Status</div>
          <div>
            Awaiting your <br /> approvel{" "}
          </div>
        </BarItems>
      </BarFlex>
    </div>
  );
};

export default Bar;
