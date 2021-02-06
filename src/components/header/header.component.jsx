import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/logo.svg';
import './header.styles.scss';
import{auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';



// because header component use currentUser we need 
// to take the state of currentUser from user reducer
// for that import higher order component {connect}
// which connect the user state to header component by 
// setting the current user to user reducer-> see mapStateToProps()
const Header = ({currentUser})=>{
    //console.log(`currentUser:${currentUser}`)
    
    return(
    <div className='header'>
        <Link className='logo-container' to = '/'>
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className='option'  to = '/shop'>
                Shop
            </Link>
            <Link className='option' to = '/contact'>
                Contact
            </Link>
           
            {
                currentUser ?(
                <div className='option' onClick={()=>auth.signOut()}>
                    
                    SIGN OUT
                </div >
                ):(
                <Link className='option' to = '/signin'>
                    SIGN IN
                </Link>
                )}
           
            
        </div>
    </div>
    )
}

const mapStateToProps = state=>({
    currentUser:state.user.currentUser 
    // this is equivalent with currentuser:rootReducer.user.currentUser
});

export default connect(mapStateToProps) (Header);