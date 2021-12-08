// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  const [mode, newMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const ToggleMode = () => {
    if (mode === "light") {
      newMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = 'white';
      showAlert("Dark mode is enabled", "success");
    } else {
      newMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = 'black'
      showAlert("Light mode is enabled", "success");

    }
  }
  return (
    <>
      <Router>        
        <Navbar title="X-text" about="About us" mode={mode} ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <div className="container my-2">
          <Switch>
            <Route exact path="/about">
              <About about={About}/>
            </Route>
            <Route exact path="/">
              <TextForm button_head="Convert To Upper Case" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
