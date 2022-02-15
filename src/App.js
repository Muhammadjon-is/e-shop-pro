import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './Components/Page/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/header-comp';
import SignInUp from './SignUp-SignIn/SignInUp';
import { auth, createUserProfileDocument }  from "./firebase/firebaseUtil";
import { setCurrentUser } from './redux/user/userAction'

const NoPage = () => {
  return <h1> Hi What's Up How Are You Sorry  404 Page Not Found</h1>;
};


class  App extends React.Component {
  unsubscribeFromAuth = null 

componentDidMount(){

const {setCurrentUser} = this.props

 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
if(userAuth){
  const userRef  =  await createUserProfileDocument(userAuth)

  userRef.onSnapshot(snapShot => {
  setCurrentUser ({
        id: snapShot.id,
        ...snapShot.data()
    })
  })
}
setCurrentUser( userAuth );

  })
};

componentWillUnmount()
{
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div>
      <Header />   
     <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/shop" element={<ShopPage/>}/>
       <Route path="/signin" element={<SignInUp/>}/>
       <Route path="*" element={<NoPage />} />   
     </Routes>
   
    </div>
  )
 }
};
 const mapDistpatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
 })




export default connect(null, mapDistpatchToProps)(App);
