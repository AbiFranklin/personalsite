import React from 'react'
import ReactDOM from 'react-dom'
import { Popover, Menu, MenuItem, Button, Position } from '@blueprintjs/core'


export default class Nav extends React.Component {
  render () {
    return <div>
      <Popover content={
        <Menu large={true}>
        <Menu>About Abi</Menu>
        <Menu>Portfolio</Menu>
        <Menu>Contact</Menu>
        </Menu>
       } position={Position.CENTER_TOP}>
        <Button icon="menu" />
      </Popover>
    </div>
  }
}
