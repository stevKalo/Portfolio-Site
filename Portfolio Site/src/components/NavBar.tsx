import { useState } from 'react';

export default function NavBar(props) {
  return (
    <div className='nav-container'>
      <ul className='nav-bar'>
        <li className='nav-item' onClick={props.onClick}>
          Home
        </li>
        <li className='nav-item' onClick={props.onClick}>
          Photos
        </li>
        <li className='nav-item' onClick={props.onClick}>
          Drone
        </li>
        <li className='nav-item' onClick={props.onClick}>
          WebDev
        </li>
      </ul>
    </div>
  );
}
