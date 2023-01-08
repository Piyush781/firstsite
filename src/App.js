
import './App.css';
// import About from './components/About'; 
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
//  } from "react-router-dom";
function App() {
  const [mode,setmode]=useState('light');
const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title='React App - Dark Mode';
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='React App - Light Mode';
    }
  }
  return (
    <>
 {/* <Router> */}
 {/* <Navbar title="sldflsj" abouttext="SERVICES"/> */}
<Navbar mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-6 ">
         {/* <Routes>

          <Route path="/about" element={<About/>}/> 
          <Route path="/home" element={<TextForm heading="Enter the text here" showAlert={showAlert} mode={mode}/>}/>
          
        </Routes> */}
<TextForm heading="Enter the text here" showAlert={showAlert} mode={mode}/>
</div>
 {/* </Router> */}
</>
);
}

export default App;
