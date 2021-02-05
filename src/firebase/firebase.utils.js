import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyDUKZgpI7v0jvoouXmrOUgtUrgWvGXnmv8",
    authDomain: "fir-a848f.firebaseapp.com",
    databaseURL: "https://fir-a848f.firebaseio.com",
    projectId: "fir-a848f",
    storageBucket: "fir-a848f.appspot.com",
    messagingSenderId: "329425886802",
    appId: "1:329425886802:web:d35ffd4bfece0efd56098b",
    measurementId: "G-53V827CL3K"
  };


  // once the user is authenticated auth()library returns a user object
// but that user need to be stored in database(firestore) 
// it's an async function which take the user from auth library and put it
// into database
//userAuth -> user from auth library and additionalData is others properties 
// of user object
// first we check if userAuth exists(if user is signed in)
// if the userAuth exists we need to query the database to check if
// the user is already in database
// IN FIREBASE ARE 2 TYPES OF QUERYS queryReference and querySnapshot
// important.. FIREBASE will always return the object even if nothing 
// exists at from that query
//QueryReference -> represents the current place in the database->
    //-> does not have the actual data of collection or document->
   //-> it' s used with a document for CRUD operations
   //-> documentRef methods are -> .set() .get() .update() .delete()
   //-> to add a document to collection -> collectionref.add()
// QuerySnapshot -> hold the actual data 

// to get the snapshotObject -> referenceObject.get()

// it s an async function because makes call to database
  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth){
      return;
    }
    // get the referenceObject from database
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    // get the snapshotObject
    const snapShot = await userRef.get()
    // the snapShot object has a property called exists which is false if there is no data
    // if no data in snapShot create data by calling set() method on referenceObject
    // with information from userAuth object
    if(!snapShot.exists){
      const{displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({
    prompt:'select_account'
  });

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;