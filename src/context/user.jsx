import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListener, createUserDocument } from "../utils/firebase/firebase";


// the default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    const { type, payload } = action

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                currentUser: payload
            }
        default: 
            throw new Error(`Unhandled type ${type} in user reducer`)
    }
}
const INITIAL_STATE = {
    currentUser: null
}
export const UserProvider = ({ children }) => {
    // using useState
    // const [currentUser, setCurrentUser] = useState(null);
    
    // using reducers
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)   
    // const { currentUser } = state;

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

    const value = {
        currentUser, setCurrentUser
    }

    useEffect(() => { 
        const unsubsciber = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
            if(user) createUserDocument(user);
        });
        return unsubsciber;
    }, [])
    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}