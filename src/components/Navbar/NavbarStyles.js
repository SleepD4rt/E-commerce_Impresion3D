import styled from "styled-components";

export const NavbarContainer = styled.div`
  justify-content: space-around;
  background-color: #222222;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 0;
`;

export const Items_NavbarContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;

  background-color: green;
`;

export const Img_Item = styled.div`
  height: auto;
`;

export const Item_Items = styled.div`
  padding: 5px 10px 10px 10px;
`;
