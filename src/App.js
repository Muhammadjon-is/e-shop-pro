import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './Components/Page/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/header-comp';



const NoPage = () => {
  return <h1>404 Page Not Found</h1>;
};


function App() {
  return (
    <div>
   <Header />     
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/shop" element={<ShopPage/>}/>
       <Route path="*" element={<NoPage />} />
      
     </Routes>
   


    {/* < HomePage/> */}
    </div>
  );
}

export default App;
