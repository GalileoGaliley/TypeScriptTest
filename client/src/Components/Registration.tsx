import React, {useState, useContext} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {registration} from "../HTTP/userAPI";
import {observer} from "mobx-react-lite";

import {Context} from "../index";
import {Account_Route} from "../utils/constants";
import UserStore from "../Store/UserStore";
import jwt_decode from "jwt-decode";

const Registration = observer(() => {
    let navigate = useNavigate();
    const us = useContext(Context);
    let user = us.us;
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [passDuplicate, setPassDuplicate] = useState<string>('');
    const [include, setInclude] = useState<string>('');
    const signUp = async ()=>{

            if (pass !== passDuplicate){
                setInclude('Введенные пароли не совпадают')
                return
            }

            await registration(login,email,pass).then((data)=>{
                user.setUser(data);
                user.setAuth(true);
                localStorage.setItem("token", data.token);
                navigate('/account')
            });





    };
    return (
        <div className={'formField'}>
            <h4 className={'mt-5 text-center'}>Регистрация</h4>
            <Form className={'d-flex flex-column mb-5'}>
                <Row className={'mt-3 justify-content-center align-items-center'}>
                    <Col md={3} className={'text-center'}>
                        <h4>Логин</h4>
                    </Col>
                    <Col md={5}  className={'w-auto'}>
                        <Form.Control  value={login} onChange={(event)=> {setLogin(event.target.value)}} placeholder={'Придумайте логин'} type={'text'} />
                    </Col>
                </Row>
                <Row className={'mt-3 justify-content-center align-items-center'}>
                    <Col md={3} className={'text-center'}>
                        <h4>Email</h4>
                    </Col>
                    <Col md={5}  className={'w-auto'}>
                        <Form.Control  value={email} onChange={(event)=> {setEmail(event.target.value)}} placeholder={'Введите ваш email'} type={'text'} />
                    </Col>
                </Row>
                <Row className={'mt-3 justify-content-center align-items-center'}>
                    <Col md={3} className={'text-center'}>
                        <h4>Пароль</h4>
                    </Col>
                    <Col md={5}  className={'w-auto'}>
                        <Form.Control  value={pass} onChange={(event)=> {setPass(event.target.value)}} placeholder={'Придумайте пароль'} type={'text'} />
                    </Col>
                </Row>
                <Row className={'mt-3 justify-content-center align-items-center'}>
                    <Col md={3} className={'text-center'}>
                        <h4>Повторите пароль</h4>
                    </Col>
                    <Col md={5}  className={'w-auto'}>
                        <Form.Control  value={passDuplicate} onChange={(event)=> {setPassDuplicate(event.target.value)}} placeholder={'Повторите пароль'} type={'text'} />
                    </Col>
                </Row>
                <div className={'color-red'}>{include}</div>
                <Row className={'justify-content-center mt-4'}>
                    <Button onClick={()=>signUp()} className={'w-auto'} variant="outline-success">Зарегистрироваться</Button>
                </Row>

            </Form>


        </div>
    );
});

export default Registration;