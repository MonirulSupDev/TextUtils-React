// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from "react";
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
// import {BrowserRouter as Main, Route, Routes} from 'react-router-dom';
// import Error from './components/Error';

function App() {

  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#08316d";
      showAlert("Dark mode is enabeled!", "success");
      document.title = "TextUtil Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtil is amaging!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now!";
      // }, 1500);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabeled!", "success");
      document.title = "TextUtil Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    {/* <Main>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    
    </Main> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode}/>
    
    </>
  );
}

export default App;
