import React, {useContext, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {createContact} from "../HTTP/contactAPI";
import {Context} from "../index";

const ModalToCreate = observer(() => {

    const us = useContext(Context);
    let user = us.us.User?.token;
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const create = ()=>{
        if (user){
            createContact(name, lastname, email, phone, user).then(data => console.log(data));
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
                                    create()
                                }} className={'w-auto'} variant="outline-success">Создать</Button>
                            </Row>

                        </Form>


                    </div>
                </div>
        </div>
    );
});

export default ModalToCreate;