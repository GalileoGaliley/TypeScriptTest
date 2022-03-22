import React, {useContext, useEffect} from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {Account_Route, Login_Route, Registration_Route} from "../utils/constants";
import AuthPage from "../Pages/AuthPage";
import Account from "../Pages/Account";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    let navigate = useNavigate();
    const user = useContext(Context);
    useEffect(()=>{
        let token = localStorage.getItem("token");

        if (token){
            user.us.setUser({token:token});
            navigate('/account')
        }else {
            navigate('/login')
        }
    },[])
    return (
        <Routes >
            <Route path = {Login_Route} element={<AuthPage/>}  />
            <Route path = {'/account'} element={<Account/>}  />

        </Routes>
    );
});

export default AppRouter;