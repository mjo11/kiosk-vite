// src/components/HomePage.js
import React from 'react';
import './HomePage.css';
import MISSeal from './maps/MIS.jpg'
import vba from './OrgChart/vba_FRONT.png'
import Lamante from'./OrgChart/LAmante.png'

const HomePage = () => {
 /* const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
 */
  return (
    <div className="home-container">

      <div className="banner banner-top">
      </div>

      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/San_Pablo_City_Laguna_seal.svg/1200px-San_Pablo_City_Laguna_seal.svg.png" alt="Company Logo" className="logo flipping-logo" />
      </div>

      <div className="banner banner-bottom">
        <div className="banner-bottom content">
        <h1>SAN PABLO CITY MEGA CAPITOL</h1>
        <button className="action-button"> <a href="/kiosk">TAP TO BEGIN</a></button>
        <p>Client's Service Assistance Kiosk <br />Powered by MIS San Pablo 2024</p>
        <img className="MISseal"src={MISSeal}/>
        </div>
      </div>

      <div className="VBA-container">
      <img src={vba} alt="VBA" className="VBA-image" />
      </div>

      <div className="Larry-container">
      <img src={Lamante} alt="VBA" className="Larry-image" />
      </div>

    </div>
  );
};

export default HomePage;
