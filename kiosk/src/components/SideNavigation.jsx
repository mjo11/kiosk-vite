// src/components/SideNavigation.js
import React from 'react';
import './SideNavigation.css';
import SPCseal from './maps/SPCSeal.png'

const SideNavigation = ({}) => {

  return (
    <div className="sidebar">
      <div className='Seal-container'>
        <img src={SPCseal} alt="Company Logo" className="seal-logo" />
      </div>

      <h4>SAN PABLO CITY MEGA CAPITOL</h4>
      <h4>LOCAL GOVERNMENT OFFICIALS</h4>
      <ul>
          <li>Hon. Vicente Belen Amante, PhD</li>
          <h4>MAYOR</h4>
          <li>Hon. Justin Gapit Colago</li>
          <h4>VICE MAYOR</h4><br />
          <h4>CITY COUNCILORS</h4>
          <li>Hon. Angelita Erasmo Yang, MPA</li>
          <li>Hon. Carmela Asaña Acebedo, MPA</li>
          <li>Hon. Lou Vincent Bondad Amante</li>
          <li>Hon. Christian Dior Capuno Amante, MPA</li>
          <li>Hon. Martin Angelo Belen Adriano JR.</li>
          <li>Hon. Francis Andal Calatraba</li>
          <li>Hon. Richard Conducto Pavico</li>
          <li>Hon. Buhay Dimabugti Espiritu</li>
          <li>Hon. Cesarito Cusi Ticzon</li>
          <li>Hon. Syra A. Medina</li>
          <li>Hon. Ariston Amante (ABC)</li>
          <li>Hon. Eldrich Khristoffer B. Villanueva (SKF)</li>
      </ul>

     </div>
  );
};

export default SideNavigation;