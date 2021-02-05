import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  // application is listening to authentication state changes
  // is async because make calls to database api
  // after storing the user in database, now we have to store it in the state 
  // of our app so we can use it in our app
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null we call createUserProfileDocument(userAuth)
        // which will return a referenceObject
        // on that referenceObject(userRef) -> call onSnapshot method
        // which will return snapShotObject and base on that we update the state
        // of currentUser
        // to get the data from snapShotObject -> call data() methos
      // if userAuth is null-> we set state to userAuth
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      
      this.setState({currentUser:userAuth});

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      // in the header if the currentUser is true -> render sign out
      // otherwise -> sign in
      // with redux the currentUser value in Header component will be that 
      //from user reducer
      <div>
        <Header /> 
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;