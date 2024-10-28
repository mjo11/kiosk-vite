// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import SurveyForm from './components/SurveyForm';
import SideNavigation from './components/SideNavigation';
import MapComponent from './components/MapComponent';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [selectedOffice, setSelectedOffice] = useState(null);

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/kiosk" 
            element={
              <div className="kiosk-container">
                <SideNavigation setSelectedOffice={setSelectedOffice} />
                <MapComponent selectedOffice={selectedOffice} />
              </div>
            } 
          />
          <Route path="/survey-form" element={<SurveyForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
