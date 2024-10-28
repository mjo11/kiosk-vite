import React, { useState } from 'react';
import { Container, Typography, Grid, Radio, RadioGroup, FormControlLabel, Button, TextField, IconButton, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; 
import { useNavigate } from 'react-router-dom';
import './SurveyForm.css';

const SurveyForm = () => {
  const [date, setDate] = useState('');
  const [rating1, setRating1] = useState('');
  const [rating2, setRating2] = useState('');
  const [rating3, setRating3] = useState('');
  const [rating4, setRating4] = useState('');
  const [rating5, setRating5] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
    department: '',
  });

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Responses:
      First Name: ${personalInfo.firstName || 'Not provided'}
      Last Name: ${personalInfo.lastName || 'Not provided'}
      Email: ${personalInfo.email}
      Age: ${personalInfo.age}
      Gender: ${personalInfo.gender}
      Department: ${personalInfo.department}
      Officer/Staff: ${personalInfo.Staff}
      Rating 1: ${rating1}
      Rating 2: ${rating2}
      Rating 3: ${rating3}
      Rating 4: ${rating4}
      Rating 5: ${rating5}
      Date: ${date}`);
    navigate('/kiosk');
  };

  const handleClose = () => {
    setIsOpen(false);
    navigate('/kiosk');
  };

  if (!isOpen) return null;

  return (
    <Container className="scrollable-container" maxWidth="md" style={{ marginTop: '20px', textAlign: 'center' }}>
      <IconButton 
        onClick={handleClose} 
        style={{ position: 'absolute', top: '10px', right: '10px' }} 
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>      
      <Typography variant="h4" gutterBottom>Data Privacy Notice</Typography>
      <Typography variant="body1" paragraph>
        Ang survey ay nagpapanatili at nagpoprotekta sa pagiging pribado ng mga personal na datos na ibinabahagi mo sa amin.
        Nangangako kami na ipatupad ang angkop na mga hakbang sa seguridad upang mapanatili ang pagiging kumpidensyal,
        integridad, at pagkakaroon ng iyong mga personal na datos alinsunod sa RA 10173 o ang Data Privacy Act ng 2012.
      </Typography>

      <Typography variant="h4" gutterBottom>CLIENT FEEDBACK AND SATISFACTORY SURVEY</Typography>
      <Typography variant="body1" paragraph>
      Mabuhay! Mahalaga sa amin ang iyong mga puna at suhestiyon. Mangyaring kumpletuhin ang survey na ito sapagkat gagamitin 
        namin ang iyong mga tugon upang patuloy na mapabuti ang aming mga serbisyo. Aabutin lamang ito ng humigit-kumulang 1 
        minuto ng iyong oras. Maraming salamat!
      </Typography>

      <Typography variant="h6" style={{ marginTop: '20px' }}>Personal Information</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name (Optional)"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name (Optional)"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email (Optional)"
              name="email"
              type="email"
              value={personalInfo.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Age"
              name="age"
              type="number"
              value={personalInfo.age}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Gender"
              name="gender"
              value={personalInfo.gender}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            >
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              label="Department"
              name="department"
              value={personalInfo.department}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            >
              <MenuItem value="MISO">MANAGEMENT INFORMATION SYSTEMS OFFICE</MenuItem>
              <MenuItem value="BUDGET">CITY BUDGET OFFICE</MenuItem>
              <MenuItem value="ACCOUNTING">CITY ACCOUNTING OFFICE</MenuItem>
              <MenuItem value="GSO">CITY GENERAL SERVICES OFFICE</MenuItem>
              <MenuItem value="LEDIPO">LOCAL ECONOMIC DEVELOPMENT AND INVESTMENT PROMOTIONS OFFICE</MenuItem>
              <MenuItem value="GAD">GENDER AND DEVELOPMENT OFFICE</MenuItem>
              <MenuItem value="CEO">CITY ENGINEER OFFICE</MenuItem>
              <MenuItem value="BUILDING">OFFICE OF THE BUILDING OFFICIAL</MenuItem>
              <MenuItem value="CPDO">CITY PLANNING AND DEVELOPMENT OFFICE</MenuItem>
              <MenuItem value="LCR">LOCAL CIVIL REGISTRY</MenuItem>
              <MenuItem value="ASSESSOR">CITY ASSESSOR OFFICE</MenuItem>
              <MenuItem value="TREASURER">CITY TREASURER OFFICE</MenuItem>
              <MenuItem value="BPLO">BUSINESS PERMITS AND LICENSING DIVISION</MenuItem>
              <MenuItem value="MAYOR">OFFICE OF THE CITY MAYOR</MenuItem>
              <MenuItem value="POPULATION">CITY POPULATION OFFICE</MenuItem>
              <MenuItem value="TRAINING CENTER">ICT TRAINING CENTER</MenuItem>
              <MenuItem value="SWDO">CITY SOCIAL WELFARE AND DEVELOPMENT OFFICE</MenuItem>
              <MenuItem value="INDIGENCY">INDIGENCY</MenuItem>
              <MenuItem value="HRMO">CITY HUMAN RESOUCE MANAGEMENT OFFICE</MenuItem>
              <MenuItem value="INTERIOR">DEPARTMENT OF INTERIOR AND LOCAL GOVERNMENT</MenuItem>
              <MenuItem value="CIO">CITY INFORMATION OFFICE</MenuItem>
              <MenuItem value="ENVIRONMENT">CITY ENVIRONMENT AND NATURAL RESOURCES OFFICE</MenuItem>
              <MenuItem value="SWMO">CITY SOLID WASTE MANAGEMENT OFFICE</MenuItem>
              <MenuItem value="TOURISM">CITY TOURISM CONSULTANT OFFICE</MenuItem>
              <MenuItem value="BAC">BIDS AND AWARDS COMMITTEE OFFICE</MenuItem>

            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              label="Officer/Staff"
              name="staff"
              value={personalInfo.Staff}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            >
              <MenuItem value="Officer1">Officer1</MenuItem>
              <MenuItem value="Officer2">Officer2</MenuItem>
              <MenuItem value="Officer3">Officer3</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        <Typography variant="h6" style={{ marginTop: '20px' }}>Pumili ng Petsa:</Typography>
        <TextField
          type="date"
          value={date}
          onChange={handleDateChange}
          variant="outlined"
          fullWidth
          style={{ marginTop: '10px', maxWidth: '300px', margin: '0 auto' }}
        />
        <br/><br/>

        {[ 
          { question: 'Gaano ka nasiyahan sa bilis ng pagtugon sa iyong transaksyon?', value: rating1, setValue: setRating1 },
          { question: 'Gaano ka nasiyahan sa mga hakbang at mga hininging dokumento?', value: rating2, setValue: setRating2 },
          { question: 'Gaano ka nasiyahan sa pagiging magalang at matapat ng kawani?', value: rating3, setValue: setRating3 },
          { question: 'Gaano ka nasiyahan sa kakayahan ng kawani?', value: rating4, setValue: setRating4 },
          { question: 'Gaano ka nasiyahan sa naging serbisyo ng opisina ng San Pablo Mega Capitol?', value: rating5, setValue: setRating5 },
        ].map(({ question, value, setValue }, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom>{question}</Typography>
            <RadioGroup row value={value} onChange={(e) => setValue(e.target.value)}>
              <Grid container spacing={2} justifyContent="center">
                {[1, 2, 3, 4, 5].map((val, i) => (
                  <Grid item key={i}>
                    <FormControlLabel
                      value={String(val)}
                      control={<Radio />}
                      label={<span style={{ fontSize: '50px' }}>{['😡', '😟', '😐', '😊', '😁'][i]}</span>}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </div>
        ))}

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Isumite
        </Button>
      </form>
    </Container>
  );
};

export default SurveyForm;
