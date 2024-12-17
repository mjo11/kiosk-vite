import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MainMap from './maps/Map.jpg'
import MainMap2 from './maps/Map2.jpg'
import Blank from './officer/Blank.png'
import MISO from './maps/MISO.png'
import MISHead from './officer/HeadMIS.jpg'
import Charter2024 from './CitizenCharter/CC2024.pdf'
import OrgChartMIS from './OrgChart/MISstaff.png'
import CITYBUDGET from './maps/CITYBUDGET.png'
import HeadBudget from './officer/HeadBudget.png'
import BudgetOrgChart from './OrgChart/BudgetOrgChart.png'
import BudgetCC from './CitizenCharter/BudgetCC.pdf'
import MayorsRecord from './maps/MayorsRecord.png'
import CAO from './maps/CAO.png'
import ACCOUNTING from './maps/ACCOUNTING.png'  
import AccountingChart from './OrgChart/AccOrgChart.png'
import HeadAccounting from './officer/HeadAccounting.png'
import AccountantCC from './CitizenCharter/AccountantCC.pdf'
import CashDisbursement from './maps/CashDisbursement.png'
import HeadZoning from './officer/HeadZoning.png'
import EngineerOffice from './maps/EngineerOffice.png'
import HeadEngr from './officer/HeadCEO.png'
import EngrOrg from './OrgChart/EngrOrgChart.png'
import OBO from './maps/OBO.png'
import LCRarchive from './maps/LCRarchiveZoning.png'
import LCR from './maps/LCR.png'
import Assessor from './maps/ASSESSOR.png'
import AssessorCC from './CitizenCharter/AssessorCC.pdf'
import TresOffice from './maps/BussTax.png'
import BussTax from './maps/BussTax.png'
import AssessmentCash from './maps/AssessmentCash.png'
import LandTax from './maps/LandTax.png'
import Cash from './maps/CASH.png'
import HeadTreas from './officer/HeadTreas.jpg' 
import TreasCC from './CitizenCharter/TreasurerCC.pdf'
import BPLO from './maps/BPLO.png'
import BPLOOrgChart from './OrgChart/BPLOOrgChart.png'
import HeadBPLO from './officer/HeadBPLO.png'
import BPLOCC from './CitizenCharter/BPLOCC.pdf'
import Mayor from './maps/MAYOR.png'
import HeadMayor from './officer/HeadMayor.png'
import HeadBAC from './officer/HeadBAC.png'
import HeadLCR from './officer/HeadLCR.png'
import OrgOnProcess from './OrgChart/OrgOnProcess.png'
import './MapComponent.css';

const MapComponent = () => {
  const [activeRoom, setActiveRoom] = useState(null);
  const [orgChartSrc, setOrgChartSrc] = useState(null);
  const [charterSrc, setCharterSrc] = useState(null);
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);
  const [isOrgChartModalOpen, setOrgChartModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (roomId) => {
    setActiveRoom(roomId);
    // Set the appropriate org chart and charter PDF for each room
    switch (roomId) {
      case 'Room1':
        setOrgChartSrc(OrgChartMIS);
        setCharterSrc(Charter2024);
        break;
      case 'Room3':
        setOrgChartSrc(BudgetOrgChart);
        setCharterSrc(BudgetCC);
      break;
      case 'Room4':
        setOrgChartSrc(AccountingChart);
        setCharterSrc(AccountantCC);
        break;
      case 'Room5':
        setOrgChartSrc(AccountingChart);
        setCharterSrc(AccountantCC);
      break;
      case 'Room6':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room7':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room8':
        setOrgChartSrc(EngrOrg);
        setCharterSrc(Charter2024);
      break;
      case 'Room9':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room10':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room11':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room12':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room13':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(AssessorCC);
      break;
      case 'Room14':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room15':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room16':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(TreasCC);
      break;
      case 'Room17':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;      
      case 'Room18':
      setOrgChartSrc(OrgOnProcess);
      setCharterSrc(Charter2024);
      break;
      case 'Room19':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room20':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room21':
        setOrgChartSrc(BPLOOrgChart);
        setCharterSrc(BPLOCC);
      break;
      case 'Room22':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room23':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room24':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room25':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room26':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room27':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;
      case 'Room28':
        setOrgChartSrc(OrgOnProcess);
        setCharterSrc(Charter2024);
      break;

      default:
        setOrgChartSrc(null);
        setCharterSrc(null);
    }
  };

  const closeModal = () => {
    setActiveRoom(null);
    setOrgChartSrc(null);
    setCharterSrc(null);
  };

  const openPdfModal = () => {
    setPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setPdfModalOpen(false);
  };

  const openOrgChartModal = () => {
    setOrgChartModalOpen(true);
  };

  const closeOrgChartModal = () => {
    setOrgChartModalOpen(false);
  };

  const handleSurveyFormNavigation = () => {
    navigate('/survey-form');
  };

  return (
    <div className="map-container">
      {/* Map Display - Floor 1 */}
      <div className="map-box">
        <h2>First Floor</h2>
        <p>(Please select a specific office)</p>
        <button className="BCK"> <a href="/">BACK</a></button>
        <div className="floorplan-container">
          <img src={MainMap} alt="Map 1 Floor Plan" className="floorplan-image" />
          
          <button 
            className="label-button" 
            style={{ top: '68%', left: '28%', }} 
            onClick={() => openModal('Room1')}>
            MISO
          </button>

          <button 
            className="label-button" 
            style={{ top: '40%', left: '28%', fontSize:'12px' }} 
            onClick={() => openModal('Room3')}>
            CITY BUDGET <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '32%', left: '28%', fontSize:'12px' }} 
            onClick={() => openModal('Room4')}>
            CITY <br/>ACCOUNTING<br/>OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '27%', left: '28%', fontSize:'12px' }} 
            onClick={() => openModal('Room5')}>
            ACCOUNTING
          </button>

          <button 
            className="label-button" 
            style={{ top: '17%', left: '28%', fontSize:'12px' }} 
            onClick={() => openModal('Room6')}>
            CITY MAYOR'S<br/> RECORDS <br/> AND ADMIN 
          </button>

          <button 
            className="label-button" 
            style={{ top: '14%', left: '6%', fontSize: '14px' }} 
            onClick={() => openModal('Room7')}>
          
          </button>

          <button 
            className="label-button" 
            style={{ top: '12%', left: '62%' }} 
            onClick={() => openModal('Room8')}>
            CITY ENGINEER <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '26%', left: '66%' }} 
            onClick={() => openModal('Room9')}>
            OBO
          </button>

          <button 
            className="label-button" 
            style={{ top: '32%', left: '61%', fontSize: '12px' }} 
            onClick={() => openModal('Room10')}>
            ZONING AND<br/>LAND USE <br/> DIVISION
          </button>

          <button 
            className="label-button" 
            style={{ top: '32%', left: '68%', fontSize: '12px' }} 
            onClick={() => openModal('Room11')}>
            LCR<br/>(ARCHIVE)
          </button>

          <button 
            className="label-button" 
            style={{ top: '41%', left: '66%' }} 
            onClick={() => openModal('Room12')}>
            LCR
          </button>

          <button 
            className="label-button" 
            style={{ top: '51%', left: '61%' }} 
            onClick={() => openModal('Room13')}>
            CITY ASSESSORS <br/> OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '57%', left: '65%' }} 
            onClick={() => openModal('Room14')}>
            CASH
          </button>

          <button 
            className="label-button" 
            style={{ top: '60%', left: '61%', fontSize: '14px' }} 
            onClick={() => openModal('Room15')}>
            DISBURSEMENT
          </button>

          <button 
            className="label-button" 
            style={{ top: '56%', left: '48%', fontSize: '14px' }} 
            onClick={() => openModal('Room16')}>
            CITY<br/>TREASURER<br/>OFFICE
          </button>

          <button 
            className="label-button" 
            style={{ top: '52%', left: '42%', fontSize: '14px' }} 
            onClick={() => openModal('Room17')}>
            LAND TAX DIVISION
          </button>

          <button 
            className="label-button" 
            style={{ top: '65%', left: '42%', fontSize: '12px' }} 
            onClick={() => openModal('Room18')}>
            BUSINESS<br/>TAX
          </button>

          <button 
            className="label-button" 
            style={{ top: '65%', left: '49%', fontSize: '11px' }} 
            onClick={() => openModal('Room19')}>
            ASSESSMENT
          </button>

          <button 
            className="label-button" 
            style={{ top: '67%', left: '50%', fontSize: '11px' }} 
            onClick={() => openModal('Room20')}>
            CASH
          </button>

          <button 
            className="label-button" 
            style={{ top: '58%', left: '37%' }} 
            onClick={() => openModal('Room21')}>
            BPLO
          </button>

          <button 
            className="label-button" 
            style={{ top: '88%', left: '38%', fontSize: '13px' }} 
            onClick={() => openModal('Room22')}>
            OFFICE OF THE<br/>CITY MAYOR
          </button>

        </div>
      </div>


      {/* Room Modal */}
      {activeRoom && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-left">
              {activeRoom === 'Room1' && <img src={MISO} alt="Room 1 Path" className="modal-office" />}
              {activeRoom === 'Room3' && <img src={CITYBUDGET} alt="Room 3 Path" className="modal-office" />}
              {activeRoom === 'Room4' && <img src={CAO} alt="Room 4 Path" className="modal-office" />}
              {activeRoom === 'Room5' && <img src={ACCOUNTING} alt="Room 5 Path" className="modal-office" />}
              {activeRoom === 'Room6' && <img src={MayorsRecord} alt="Room 6 Path" className="modal-office" />}
              {activeRoom === 'Room8' && <img src={EngineerOffice} alt="Room 6 Path" className="modal-office" />}
              {activeRoom === 'Room9' && <img src={OBO} alt="Room 9 Path" className="modal-office" />}
              {activeRoom === 'Room10' && <img src={LCRarchive} alt="Room 10 Path" className="modal-office" />}
              {activeRoom === 'Room11' && <img src={LCRarchive} alt="Room 11 Path" className="modal-office" />}
              {activeRoom === 'Room12' && <img src={LCR} alt="Room 12 Path" className="modal-office" />}
              {activeRoom === 'Room13' && <img src={Assessor} alt="Room 13 Path" className="modal-office" />}
              {activeRoom === 'Room14' && <img src={Cash} alt="Room 14 Path" className="modal-office" />}
              {activeRoom === 'Room15' && <img src={CashDisbursement} alt="Room 15 Path" className="modal-office" />}
              {activeRoom === 'Room16' && <img src={TresOffice} alt="Room 16 Path" className="modal-office" />}
              {activeRoom === 'Room17' && <img src={LandTax} alt="Room 17 Path" className="modal-office" />}
              {activeRoom === 'Room18' && <img src={BussTax} alt="Room 18 Path" className="modal-office" />}
              {activeRoom === 'Room19' && <img src={AssessmentCash} alt="Room 19 Path" className="modal-office" />}
              {activeRoom === 'Room20' && <img src={AssessmentCash} alt="Room 20 Path" className="modal-office" />}
              {activeRoom === 'Room21' && <img src={BPLO} alt="Room 21 Path" className="modal-office" />}
              {activeRoom === 'Room22' && <img src={Mayor} alt="Room 22 Path" className="modal-office" />}

            </div>
            <div className="modal-right">
              <span className="close" onClick={closeModal}>&times;</span>
              {activeRoom === 'Room1' && <img src={MISHead} alt="Room 1 Info" className="modal-image" />}
              {activeRoom === 'Room3' && <img src={HeadBudget} alt="Room 3 Info" className="modal-image" />}
              {activeRoom === 'Room4' && <img src={HeadAccounting} alt="Room 4 Info" className="modal-image" />}
              {activeRoom === 'Room5' && <img src={HeadAccounting} alt="Room 5 Info" className="modal-image" />}
              {activeRoom === 'Room6' && <img src={HeadMayor} alt="Room 6 Info" className="modal-image" />}
              {activeRoom === 'Room7' && <img src={MISHead} alt="Room 7 Info" className="modal-image" />}
              {activeRoom === 'Room8' && <img src={HeadEngr} alt="Room 9 Info" className="modal-image" />}
              {activeRoom === 'Room9' && <img src={Blank} alt="Room 9 Info" className="modal-image" />}
              {activeRoom === 'Room10' && <img src={HeadZoning} alt="Room 10 Info" className="modal-image" />}
              {activeRoom === 'Room11' && <img src={HeadLCR} alt="Room 11 Info" className="modal-image" />}
              {activeRoom === 'Room12' && <img src={HeadLCR} alt="Room 12 Info" className="modal-image" />}
              {activeRoom === 'Room13' && <img src={Blank} alt="Room 13 Info" className="modal-image" />}
              {activeRoom === 'Room14' && <img src={Blank} alt="Room 14 Info" className="modal-image" />}
              {activeRoom === 'Room15' && <img src={Blank} alt="Room 15 Info" className="modal-image" />}
              {activeRoom === 'Room16' && <img src={HeadTreas} alt="Room 15 Info" className="modal-image" />}              
              {activeRoom === 'Room17' && <img src={Blank} alt="Room 17 Info" className="modal-image" />}
              {activeRoom === 'Room18' && <img src={Blank} alt="Room 18 Info" className="modal-image" />}
              {activeRoom === 'Room19' && <img src={Blank} alt="Room 19 Info" className="modal-image" />}
              {activeRoom === 'Room20' && <img src={Blank} alt="Room 20 Info" className="modal-image" />}
              {activeRoom === 'Room21' && <img src={HeadBPLO} alt="Room 21 Info" className="modal-image" />}
              {activeRoom === 'Room22' && <img src={HeadMayor} alt="Room 22 Info" className="modal-image" />}
              <button className="CCharter" onClick={openPdfModal}>Citizen's Charter</button>
              <button className="OrgChart" onClick={openOrgChartModal}>Organizational Chart</button>
              <button className="SurveyButton" onClick={handleSurveyFormNavigation}>Survey Form</button>
            </div>
          </div>
        </div>
      )}

      {/* PDF Modal */}
      {isPdfModalOpen && charterSrc && (
        <div className="modal">
          <div className="modal-content pdf-modal">
            <span className="close" onClick={closePdfModal}>&times;</span>
            <iframe src={charterSrc} title="Citizen's Charter PDF" className="pdf-viewer"></iframe>
          </div>
        </div>
      )}

      {/* OrgChart Modal */}
      {isOrgChartModalOpen && orgChartSrc && (
        <div className="modal">
          <div className="modal-content OrgChart-modal">
            <span className="close" onClick={closeOrgChartModal}>&times;</span>
            <img src={orgChartSrc} title="Org Chart" className="Org-Chart" />
          </div>
        </div>
      )} 
    </div>
  );
};

export default MapComponent;
