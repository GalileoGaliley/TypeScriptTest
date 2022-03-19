import React, {useContext, useEffect, useState,} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {login} from "../HTTP/userAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';


const Auth = observer(() => {
    let navigate = useNavigate();
    const us = useContext(Context);
    let user = us.us;
    const [loginOrEmail, setLoginOrEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const signIn = async ()=>{



        await login(loginOrEmail,pass).then((data)=>{
            user.setUser(data);
            localStorage.setItem("token", data.token);
            user.setAuth(true);
            navigate('/account')

        });





    };
    return (
        <div className={'formField'}>
            <h4 className={'mt-5 text-center'}>Авторизация</h4>
                <Form className={'d-flex flex-column mb-5'}>
                    <Row className={'mt-3 justify-content-center align-items-center'}>
                        <Col md={3}>
                            <h4 className={'text-center'}>Логин</h4>
                        </Col>
                        <Col md={5} className={'w-auto'}>
                            <Form.Control name={'comment'} value={loginOrEmail} onChange={(event)=> {setLoginOrEmail(event.target.value)}} placeholder={'Введите логин'} type={'text'} />
                        </Col>
                    </Row>
                    <Row className={'mt-3 justify-content-center align-items-center'}>
                        <Col md={3}>
                            <h4 className={'text-center'}>Пароль</h4>
                        </Col>
                        <Col md={5} className={'w-auto'}>
                            <Form.Control name={'comment'} value={pass} onChange={(event)=> {setPass(event.target.value)}} placeholder={'Введите пароль'} type={'text'} />
                        </Col>
                    </Row>
                    <Row className={'justify-content-center mt-4'}>
                        <Button onClick={()=>signIn()} className={'w-auto'} variant="outline-success">Войти</Button>
                    </Row>

                </Form>


        </div>
    );
});

export default Auth;