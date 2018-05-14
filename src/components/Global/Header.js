import React, { Component } from 'react';
import logo from './images/logo.svg';
import PropTypes from 'prop-types';
import './css/Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;
    console.log(title, items);
    return (
      <div className="Header">
      <div className="Logo">
        <img src={logo} alt="logo" />
        <h2>{title}</h2>

        <ul className="Menu">
          {
            items && items.map(
              (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
            )
          }
        </ul>
      </div>
    </div>
    );
  }
}

export default Header;
