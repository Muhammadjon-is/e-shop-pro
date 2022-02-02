import React from 'react';
import './App.css';
import HomePage from './Components/Page/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopPage from './Components/Shop/Shop';




const NoPage = () => {
  return <h1>404 Page Not Found</h1>;
};


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/shop" element={<ShopPage/>}/>
       <Route path="*" element={<NoPage />} />
      
     </Routes>
     </BrowserRouter>


    {/* < HomePage/> */}
    </div>
  );
}

export default App;
