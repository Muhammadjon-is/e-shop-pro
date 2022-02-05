import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './Components/Page/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/header-comp';
import SignInUp from './SignUp-SignIn/SignInUp';
import { auth }  from "./firebase/firebaseUtil"

const NoPage = () => {
  return <h1> Sorry  404 Page Not Found</h1>;
};


class  App extends React.Component {
    constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
    
componentDidMount(){
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user})
    console.log(user);
  })
}
componentWillUnmount()
{
  this.unsubscribeFromAuth();
}



render(){
  return (

    
    <div>
      <Header  currentUser={this.state.currentUser}  />
      
     <Routes>1
       <Route path="/" element={<HomePage/>}/>
       <Route path="/shop" element={<ShopPage/>}/>
       <Route path="/signin" element={<SignInUp/>}/>
       <Route path="*" element={<NoPage />} />
      
     </Routes>
   


    {/* < HomePage/> */}
    </div>
  );
 }
}

export default App;
