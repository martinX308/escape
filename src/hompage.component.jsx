import React from 'react';
import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div classname="content">
          <h1 classname="title">Hats</h1>
          <span classname="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div classname="content">
          <h1 classname="title">JACKETS</h1>
          <span classname="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div classname="content">
          <h1 classname="title">Shoes</h1>
          <span classname="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div classname="content">
          <h1 classname="title">WOMENS</h1>
          <span classname="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div classname="content">
          <h1 classname="title">MEN</h1>
          <span classname="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;