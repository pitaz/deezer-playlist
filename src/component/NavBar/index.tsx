import React from 'react';
import './index.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="logo">Deezer</div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
