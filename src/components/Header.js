import { Bold, Items, LeftNavbar, Navbar, RightNavbar } from "../StyledComponents/Header";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
const Header = () => {
  
  return (
    <Navbar>
      <LeftNavbar>
        <Bold>Recco</Bold>
        <Items>Store</Items>
        <Items>Orders</Items>
        <Items>Analytics</Items>
      </LeftNavbar>
      <RightNavbar>
        <AddShoppingCartRoundedIcon />
        <div>
          <select
            style={{
              backgroundColor: "#1e633f",
              color: "#fff",
              border: "none",
              outline: "none",
            }}
            name=""
            id=""
          >
            <option value="">Hello, James</option>
          </select>
        </div>
      </RightNavbar>
    </Navbar>
  );
};
export default Header;
