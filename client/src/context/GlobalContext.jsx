/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const initialContext = {
    isLogedIn: false,
    changeLoginStatus: () => {},
    isAdmin: false, 
    changeAdminStatus: () => {},
};

export const GlobalContext = createContext(initialContext);

export function GlobalContextWrapper(props) {
    const [isLogedIn, setisLogedIn] = useState(initialContext.isLogedIn);
    const [isAdmin, setAdmin] = useState(initialContext.isAdmin);

useEffect(() => {
    fetch('http://localhost:5026/api/singin', {
        method: 'GET',
        credentials:'include',
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e=> console.error(e))

}, [])

    function changeLoginStatus(newStatus = false) {
        setisLogedIn(newStatus);
    }
    function changeAdminStatus(newStatus = false) {
        setAdmin(newStatus);
    }

    return (
        <GlobalContext.Provider value={{ isLogedIn, changeLoginStatus, isAdmin, changeAdminStatus }}>
            {props.children}
        </GlobalContext.Provider>
    );
}