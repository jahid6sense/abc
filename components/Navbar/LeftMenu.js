import React from 'react';
import { Menu, Grid } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint()
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Feature</a>
      </Menu.Item>
      <Menu.Item key="mail">
        <a href="">Pricing</a>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="">Rewards</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
