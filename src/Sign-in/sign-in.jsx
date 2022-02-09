import React from 'react';
import "./sign-in.scss"
import FormInput from '../form-input/formInput';
 import CustomButton from '../Components/customBut/customBut';

import {  auth,  signInWithGoogle,  } from '../firebase/firebaseUtil';

class SignIn extends React.Component{
     constructor(props){
         super(props);

       this.state = {
           email: '',
           password: ''
           };
        }


        handleSubmit = async event => {
    event.preventDefault();
   
    const { email, password } = this.state;
    //  this.setState({email: '', password: ''});

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({email: '', password: ''});
    
    } catch (error) {
      console.log(error);
      alert("Password or email wrong")
    }
      
    };

      handleChange = event => {
const { value, name} = event.target;
 this.setState({ [name]: value})
}
 
        render() {
            return(
               <div className='sign-in'>
      <h2>I  have aready an account</h2>
    <span> Sing in with your email and password</span>

  <form onSubmit={this.handleSubmit}> 
      <FormInput name="email" type="email"
       value={this.state.email} 
       handleChange={this.handleChange}
       label="Email"
       required
       />
   {/* <label>Email</label> */}

      <FormInput name="password" type="password"
       value={this.state.password}
       handleChange={this.handleChange}
       label="Password"
        required/>
      {/* <label>Password</label> */}
<div className='button'>

 <CustomButton type="submit" > Sign IN </CustomButton>

 <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
</div>
      </form>

               </div> 
            )
                  }
 }


 export default SignIn