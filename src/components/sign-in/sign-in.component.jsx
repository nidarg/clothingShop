import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from'../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    // clear the fields after submit
    handleSubmit =async event=>{
        event.preventDefault();
        const{email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            
            this.setState({
                email:'',
                password:''
            });
        }catch(err){
            console.log(err);
        }
        this.setState({email:'', password:''})
    }

    handleChange = event=>{
        const{ name, value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className= "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form className = 'form' onSubmit = {this.handleSubmit}>
                    <label className = 'label'>Email</label>
                    <input className='input' onChange={this.handleChange} name='email' value={this.state.email} type='email' required />
                    <label className = 'label'>Password</label>
                    <input className='input' onChange={this.handleChange} name='password' value={this.state.password} type='password' required />
                    
                    <CustomButton type='submit' >Sign In</CustomButton>
                    <CustomButton type = "button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </form> 
            </div>
        )
    }
}

export default SignIn;