import React from 'react'
//import ReactDOM from 'react-dom'
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom'

const menu = () => (
  <Menu>
  <Menu.Item className="navmenu">
      <Link to="/">About Abi</Link>
  </Menu.Item>
  <Menu.Item className="navmenu">
    <Link to="/portfolio">Portfolio</Link>
  </Menu.Item>
  <Menu.Item className="navmenu">
    <Link to="/contact">Contact</Link>
  </Menu.Item>
</Menu>
)

const Nav = () => (
  <Dropdown overlay={menu}>
      <Icon type="menu" className="navicon"/>
    </Dropdown>
)

  export default Nav
