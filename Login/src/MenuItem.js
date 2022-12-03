import React from "react";
import PropTypes from 'prop-types'

class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.href}>{this.props.children}</a>
      </li>
    );
  }
}

MenuItem.defaultProps = {
    children: "Ссылка",
    href: "/"
}

MenuItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default MenuItem;
