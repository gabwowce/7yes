import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

function Breadcrumb() {
  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <ChevronRightIcon className="arrow-icon" /> 
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <ChevronRightIcon className="arrow-icon" /> 
        </li>
        <li>
          <span>Checkout</span> 
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumb;
