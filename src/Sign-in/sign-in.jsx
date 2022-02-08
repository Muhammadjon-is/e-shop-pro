import React from 'react';
import "./sign-in.scss"
import FormInput from '../form-input/formInput';
 import CustomButton from '../Components/customBut/customBut';

import { signInWithGoogle } from '../firebase/firebaseUtil';

class SignIn extends React.Component{
     constructor(props){
         super(props);

       this.state = {
           email: '',
           password: ''

       }
        }


        handleSubmit = event => {
    event.preventDefault();

this.state({email: '', password: ''}) }


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
       required/>
   {/* <label>Email</label> */}

      <FormInput name="password" type="password"
       value={this.state.password}
       handleChange={this.handleChange}
       label="Password"
        required/>
      {/* <label>Password</label> */}
<div className='button'>

 <CustomButton type="submit" > Sign IN </CustomButton>

 <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
</div>
      </form>

               </div> 
            )
                  }
 }


 export default SignIn