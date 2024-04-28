import {
  NavbarContainer,
  Items_NavbarContainer,
  Img_Item,
  Item_Items,
} from "./NavbarStyles";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <NavbarContainer>
      <Items_NavbarContainer>
        <Link to="/">
          <Img_Item>LOGO</Img_Item>
        </Link>
      </Items_NavbarContainer>
      <Items_NavbarContainer></Items_NavbarContainer>
      <Items_NavbarContainer>
        <Item_Items>
          <Img_Item>CARRITO</Img_Item>
        </Item_Items>
        <Item_Items>Productos</Item_Items>
        <Item_Items>Nosotros</Item_Items>
      </Items_NavbarContainer>
    </NavbarContainer>
  );
}

export default Navbar;
