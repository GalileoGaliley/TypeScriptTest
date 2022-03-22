import React, {SetStateAction, useContext, useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {createContact} from "../HTTP/contactAPI";
import {Context} from "../index";
import User from "../models/User";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router'

const ModalToCreate = observer(({ onClick }:SetStateAction<any>) => {

    const context = useContext(Context);
    let user = context.us.User;
    let contacts = context.con.Contact;
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const create = ()=>{

        console.log(name + '/' + lastname + '/' + email + '/' + phone )
        console.log(user)
        if (user){

            console.log(name + '/' + lastname + '/' + email + '/' + phone )
            createContact(name, lastname, email, phone, user?.token).then(data => {
                contacts?.push(data);
                onClick(false)
            });
        }

    }
    return (
        <div className={'Modal'}>
                <div className={'modalBody'}>
                    <div onClick={(e)=>{
                        e.stopPropagation()
                    }} className={'formFieldCreate'}>
                        <h4 className={'mt-5 text-center'}>Создание контакта</h4>
                        <Form className={'d-flex flex-column mb-5'}>
                            <Row className={'mt-3 justify-content-center align-items-center'}>
                                <Col md={3} className={'text-center'}>
                                    <h4>Имя</h4>
                                </Col>
                                <Col md={5} className={'w-auto'}>
                                    <Form.Control  value={name} onChange={(event)=> {setName(event.target.value)}} placeholder={'Введите имя'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3 justify-content-center align-items-center'}>
                                <Col md={3} className={'text-center'}>
                                    <h4>Фамилия</h4>
                                </Col>
                                <Col md={5} className={'w-auto'}>
                                    <Form.Control  value={lastname} onChange={(event)=> {setLastname(event.target.value)}} placeholder={'Введите фамилию'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3 justify-content-center align-items-center'}>
                                <Col md={3} className={'text-center'}>
                                    <h4>Email</h4>
                                </Col>
                                <Col md={5} className={'w-auto'}>
                                    <Form.Control  value={email} onChange={(event)=> {setEmail(event.target.value)}} placeholder={'Введите email'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'mt-3 justify-content-center align-items-center'}>
                                <Col md={3} className={'text-center'}>
                                    <h4>Телефон</h4>
                                </Col>
                                <Col md={5} className={'w-auto'}>
                                    <Form.Control  value={phone} onChange={(event)=> {setPhone(event.target.value)}} placeholder={'Введите номер телефона'} type={'text'} />
                                </Col>
                            </Row>
                            <Row className={'justify-content-center mt-4'}>
                                <Button onClick={()=> {
                                    console.log('create')
                                    create();
                                }} className={'w-auto'} variant="outline-success">Создать</Button>
                            </Row>

                        </Form>


                    </div>
                </div>
        </div>
    );
});

export default ModalToCreate;