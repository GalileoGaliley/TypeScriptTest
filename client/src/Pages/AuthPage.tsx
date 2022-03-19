import React, {useState} from 'react';
import Auth from "../Components/Auth";
import Registration from "../Components/Registration";
import {Button, Row} from "react-bootstrap";

const AuthPage = () => {
    const [state, setState] = useState(true);
    const [text, setText] = useState('Авторизация');

    return (
        <>
            {state?
                <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
                    <Auth/>
                </div>
                :
                <div className={'w-100 h-100 d-flex justify-content-center align-items-center'}>
                    <Registration/>
                </div>
            }
            <Row className={'justify-content-center'}>
                <Button variant={'danger'} className={'w-auto mt-5'} onClick={()=>{setState(!state);state?setText('Авторизация'):setText('Регистрация')}}>{text}</Button>
            </Row>
            </>
    );
};

export default AuthPage;