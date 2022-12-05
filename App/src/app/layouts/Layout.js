import React, { Component } from "react";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";


class Layout extends Component {
  constructor(props) {
    super(props)

    this.brand = 'REACT APP'
  }
  isActive(href) {
    return window.location.pathname === href;
  }
  render() {
    return (
      <>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>
          Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>
          Пользователи
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive('/posts')}>
          Блог
          </MenuItem>
          <MenuItem href="/comments" active={this.isActive('/comments')}>
          Комментарии
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="col-12 p-3 text-bg-dark text-center">
          (c)2022
        </footer>
      </>
    );
  }
}

export default Layout;
