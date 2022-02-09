import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './Components/Page/HomePage/HomePage';
import ShopPage from './Components/Shop/Shop';
import Header from './Components/Header/header-comp';
import SignInUp from './SignUp-SignIn/SignInUp';
import { auth,      createUserProfileDocument }  from "./firebase/firebaseUtil"

const NoPage = () => {
  return <h1> Hi What's Up How Are You Sorry  404 Page Not Found</h1>;
};


class  App extends React.Component {
    constructor() {
    super();

    this.state = {
      currentUser:  null
    }
  }
  unsubscribeFromAuth = null 

componentDidMount(){
 this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

if(userAuth){
  const userRef  =  await createUserProfileDocument(userAuth);
 
  userRef.onSnapshot(snapShot => {
    this.setState({
      currentUser: {
        id: snapShot.id,
        ...snapShot.data()
      }
    });

    console.log(this.state);
   

  });
  


}
 this.setState({
currentUser: userAuth });
  // createUserProfileDocument(user);
    // this.setState({currentUser: user})
    // console.log(user);
  });
}

componentWillUnmount()
{
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div>
      <Header  currentUser={this.state.currentUser}  />
  
     <Routes>
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
