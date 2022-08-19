import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from "../utils/firebase/firebase";
// the default value
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
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