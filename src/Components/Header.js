import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

const Header = () => {
  return (
    <>
      <div className='header'>
        <p>Loki's Movie Store</p>
      </div>
      <div className="float">
        <Link to='/favorites' className='favs' >Favorites</Link> 
      </div>
    </>
  );
};

export default Header;
