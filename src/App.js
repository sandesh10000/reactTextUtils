import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#076e3e';
      showAlert("Dark mode is enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success")
    }
  }
  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" name="My Website" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter your Input here" mode={mode} />
        {/* <Routes> */}
          {/* <Route exact path="/" element={} /> */}
          {/* <Route exact path="/about" element={<About/>} /> */}
        {/* </Routes> */}

      </div>

    {/* </Router> */}
    </>
  );
}

export default App;
