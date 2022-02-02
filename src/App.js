import React from 'react';
import './App.css';
import HomePage from './Components/Page/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const HatsPage = () =>(
<div>
  <h1> HATS PAGE</h1>
</div>

)

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/hats" element={<HatsPage/>}/>
     </Routes>
     </BrowserRouter>


    {/* < HomePage/> */}
    </div>
  );
}

export default App;
