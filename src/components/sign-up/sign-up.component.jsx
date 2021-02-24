import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from'../../firebase/firebase.utils';

import '../sign-in/sign-in.styles.scss';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    // clear the fields after submit
    handleSubmit = async event=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            // auth.createUserWithEmailAndPassword will return an user object 
            // which destructure{user}
            // then based on object returned by auth library we create a new
            // document in database with createUserProfileDocument
            const {user} = await auth.createUserWithEmailAndPassword(email,password); // this is the authUser object 
            await createUserProfileDocument(user, {displayName});
            // after insert user into database(await)-> we set state to initial state
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            }) 
        }catch(err){
            console.log(err);
        }
        
    }

    handleChange = event=>{
        const{ name, value} = event.target;
        this.setState({[name]:value});
    }

    render(){
      //const{displayName,email,password,confirmPassword} = this.state;
        return(
            <div className= "sign-in">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className = 'form' onSubmit = {this.handleSubmit}>
                    <label className = 'label'>Name</label>
                    <input className='input' onChange={this.handleChange} name='displayName' value={this.state.displayName} type='text' required />


                    <label className = 'label'>Email</label>
                    <input className='input' onChange={this.handleChange} name='email' value={this.state.email} type='email' required />
                    <label className = 'label'>Password</label>
                    <input className='input' onChange={this.handleChange} name='password' value={this.state.password} type='password' required />

                    <label className = 'label'>Confirm Password</label>
                    <input className='input' onChange={this.handleChange} name='confirmPassword' value={this.state.confirmPassword} type='password' required />
                    
                    <CustomButton type='submit' >Sign Up</CustomButton>
                   
                </form> 
            </div>
        )
    }
}

export default SignUp;