import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { db } from "./firebaseConfig"; // Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import "./SurveyForm.css";

const departmentStaffMapping = {
  'BUSINESS PERMIT LICENSING OFFICE':['Office Staff'],
  'CITY ACCOUNTING OFFICE': ['Alex C. Herrera', 'Ana Sara E. Reyes', 'Anna Marie G. Hernandez', 'Arlene M. Beltejar', 'Catherine C. Amores', 'Edwilson V. Parlero','Elisa A. Toca', 'Eloisa M. Briz', 'Emerita M. Pere','Ephraim B. Cuadra','Eudelyn A. Cortez', 'Fatima A. Alimagno', 'Gerry M. Reyes', 'Imelda S. Awayan', 'Jason Philip B. Guevara', 'Knayze Charles A. Recto', 'Laren T. Pelagio', 'Lea Jovinia D. Velasco', 'Marilyn F. Carreon', 'Marvie U. Cornista', 'Mary Grace H. Villiones', 'Nedilyn D. Beltijar', 'Reginal D. Batralo', 'Ricarte L. Brinas', 'Risha Miguela B. Biglete', 'Rose Ann L. Jocson', 'Rosmarie B. Ramos', 'Rosse Angella V. Ariano', 'Sharrel S. Tibay', 'Venus S. Palmenco',],
  'CITY ASSESSOR OFFICE':['Office Staff'],
  'CITY BUDGET OFFICE' : [ 'Aileen Estrellado', 'Alfredo Delos Trinos', 'Antonette Klaire Diokno',  'Arminna Frances Shand Biglete',  'Chielet Dequito', 'Engr. Arthur Almario',  'Gregorio Philip Estiva Jr.', 'Jimwell Belen',  'Jomar Baldo', 'Jonalyn Gonzales',  'Keith Amante',  'Lourdes Bravo', 'Maria Cecilia Suquiat', 'Sigfred Palomar',],
  'CITY ENGINEER OFFICE': ['Adrian Stithen Suarez', 'Aldrin Bruegas','Aldrin Chumacera', 'Aldrin Yaneza', 'Alexander M. Bautista', 'Allan Abania', 'Amelia Titular','Angelito Alano', 'Arnel M. Bandula', 'Bella D. Belen', 'Bernabe A. Comia Jr.','Bernard D. Monfero','Carlos Baldovino II','Derrick T. Dinglasan','Dominador G. Marquez','Edgardo A. Canaria','Edward C. Colot','Elmer C. Contemplacion','Eric Lemuel B. Panergayo','Evelyn Dimaano','Felix Espiritu','Ferdinand F. Gaviño','Fernel Miranda','Francis Albert A. Consignado','Geraldine M. Eseo','Jasmin M. Monfero','Jay Ranchy Mendoza','Jenelyn S. Guevarra', 'Joel D. Arias','John Arron M. Patulot','Josaphat Rhenzy B. Villeza', 'Julieto C. Astillero','June A. Yason','Larry Quijano','Leopoldo Ruiz','Licerio C. Pandiño','Lucilita M. Evasco','Ma. Luisa De Jesus','Mariah Rayah Bondad','Maricris B. Garcia','Marieta B. Manalo','Marvin G. Villanueva','Michael A. Dimaisip','Milagros Paulita E. Recto','Moriel Briones','Neil A. Acebedo','Nilo S. Belen Jr.','Nympha M. Avila','Oliver Carlo M. Eseo','Oscar Emralino','Placido Atienza','Proceso Ticzon Jr.','Ralph Angelo M. Evangelista','Randy M. Gesmundo','Raul U. Magsino', 'Ray Marion D. Villaflores', 'Rene Esmillo', 'Rhodora R. Arias', 'Ricardo D. Fabros III', 'Rodelio A. Garcia', 'Rommel M. Guillen','Ronald Obinal', 'Ronaldo Puhawan', 'Sherwin Tiangco', 'Teodosio G. Ceria', 'Wilfredo B. Magapi'],
  'CITY MANAGEMENT INFORMATION SYSTEMS OFFICE': ['Dr. John Matthew A. Aquino', 'Mr. Jordan M. Puhawan', 'Mrs. Jane','Mr. Patrick Vince Comia', 'Mr. Jimuel Baraero', 'Mr. Yman Mangaring', 'Mr. Jose Mariano Antonio', 'Mr. Jay-R Jonos', 'Ms. Mary Joy Olarte', 'Ms. Edalyn Aldeguer', 'Ms. Angelika Bruto', 'Mr. Eduardo Robles Jr.', 'Ms. James Mariel Aviñante'],
  'CITY MAYOR RECORDS AND ADMIN OFFICE':['Office Staff'],
  'CITY TREASURER OFFICE':['Office Staff'],
  'LEGAL CIVIL REGISTRAR OFFICE':['Office Staff'],
  'OFFICE OF BUILDING OFFICIAL':['Office Staff'],
  'OFFICE OF THE CITY MAYOR':['Office Staff'],
  'ZONING AND LAND USE DIVISION':['Office Staff'],
  

};

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
    email: '',
    age: '',
    gender: '',
    department: '',
    staff: '',
  });

  const navigate = useNavigate();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));

    // Reset staff if the department changes
    if (name === 'department') {
      setPersonalInfo((prevInfo) => ({
        ...prevInfo,
        staff: '',
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const responseData = {
      name: personalInfo.firstName || "Not provided",
      email: personalInfo.email || "Not provided",
      age: personalInfo.age,
      gender: personalInfo.gender,
      department: personalInfo.department,
      staff: personalInfo.staff,
      rating1,
      rating2,
      rating3,
      rating4,
      rating5,
      date,
    };
  
    console.log("Submitting response data:", responseData); // Debugging
    
    try {
      await addDoc(collection(db, "surveyResponses"), responseData);
      alert("Your response has been submitted successfully!");
      navigate("/kiosk");
    } catch (error) {
      console.error("Error saving response: ", error);
      alert("Failed to save your response. Please try again.");
    }
  };
  

  const handleClose = () => {
    setIsOpen(false);
    navigate('/kiosk');
  };

  if (!isOpen) return null;

  return (
    <Container className="scrollable-container" maxWidth="md" style={{ marginTop: "20px", textAlign: "center" }}>
      <IconButton
        onClick={handleClose}
        style={{ position: "absolute", top: "10px", right: "10px" }}
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
      <Typography variant="h6" style={{ marginTop: "20px" }}>Personal Information</Typography>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12}>
      <TextField
        label="Name (Optional)"
        name="firstName"
        value={personalInfo.firstName}
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
        {Object.keys(departmentStaffMapping).map((dept) => (
          <MenuItem key={dept} value={dept}>{dept}</MenuItem>
        ))}
      </TextField>
    </Grid>

    <Grid item xs={12}>
      <TextField
        select
        label="Officer/Staff"
        name="staff"
        value={personalInfo.staff}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      >
        {departmentStaffMapping[personalInfo.department]?.map((staff) => (
          <MenuItem key={staff} value={staff}>{staff}</MenuItem>
        ))}
      </TextField>
    </Grid>
  </Grid>
        <Typography variant="h6" style={{ marginTop: "20px" }}>Pumili ng Petsa:</Typography>
        <TextField
          type="date"
          value={date}
          onChange={handleDateChange}
          variant="outlined"
          fullWidth
          style={{ marginTop: "10px", maxWidth: "300px", margin: "0 auto" }}
        />
        <br /><br />
        {/* Rating Questions */}
        {[ 
          { question: "Gaano ka nasiyahan sa bilis ng pagtugon sa iyong transaksyon?", value: rating1, setValue: setRating1 },
          { question: "Gaano ka nasiyahan sa mga hakbang at mga hininging dokumento?", value: rating2, setValue: setRating2 },
          { question: "Gaano ka nasiyahan sa pagiging magalang at matapat ng kawani?", value: rating3, setValue: setRating3 },
          { question: "Gaano ka nasiyahan sa kakayahan ng kawani?", value: rating4, setValue: setRating4 },
          { question: "Gaano ka nasiyahan sa naging serbisyo ng opisina ng San Pablo Mega Capitol?", value: rating5, setValue: setRating5 },
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
                      label={<span style={{ fontSize: "50px" }}>{["😡", "😟", "😐", "😊", "😁"][i]}</span>}
                    />
                  </Grid>
                ))}
              </Grid>
            </RadioGroup>
          </div>
        ))}
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
          Isumite
        </Button>
      </form>
    </Container>
  );
};

export default SurveyForm;
