import styled from "styled-components";

export const NavbarContainer = styled.div`
  justify-content: space-between;
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
  width: 100%;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;

  background-color: green;
`;

export const Img_Item = styled.div`
  height: auto;
  padding: 2px;
  gap: 10px;
`;

export const Item_Items = styled.div`
  gap: 10px;
  padding: 5px;
`;
