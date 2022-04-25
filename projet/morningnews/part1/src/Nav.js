import React from 'react';
import './App.css';
import {Menu, Icon} from 'antd'

function Nav() {

  return (
    <nav >
      <Menu style={{textAlign: 'center'}} mode="horizontal" theme="dark">

        <Menu.Item key="mail">
          <Icon type="home" />
          Sources
        </Menu.Item>

        <Menu.Item key="test">
          <Icon type="read" />
          My Articles
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="logout" />
          Logout
        </Menu.Item>

      </Menu>
    </nav>
  );
}

export default Nav;
