import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Dropdown, Icon } from 'antd';
//import NavMenu from './Menu'

const menu = () => (
  <Menu>
  <Menu.Item>
      About Abi
  </Menu.Item>
  <Menu.Item>
    Portfolio
  </Menu.Item>
  <Menu.Item>
    Contact
  </Menu.Item>
</Menu>
)

const Nav = () => (
  <Dropdown overlay={menu}>
      <Icon type="menu" className="navicon"/>
    </Dropdown>
)

  export default Nav
