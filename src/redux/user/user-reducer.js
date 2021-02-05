
// reducers are functions which have as params state(initial state)
// and action(action has a type and a payload)
// swtching based on action.type if the type of action
// is identic with the case of switch statement
// we return a new object(!!! for rerender) with spread operator
// changing only the property on which action is fired


const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;