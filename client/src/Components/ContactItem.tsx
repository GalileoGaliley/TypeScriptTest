import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import {Contact} from "../Store/ContactsStore";
import {removeContact} from "../HTTP/contactAPI"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import User from "../models/User";
const ContactItem = observer((contact:Contact) => {
    let navigate = useNavigate();
    const us = useContext(Context);
    let user = us.us.User;
    let token = user?.token
    return (
            <div className={'d-flex justify-content-center align-items-center mt-3 contactItem'}>
                <Col md={3}>
                    <div className={'d-flex flex-column'}>
                        <p className={'mb-2'}>
                            Имя: {contact.name}
                        </p>
                        <p className={'mb-2'}>
                            Фамилия: {contact.lastname}
                        </p>

                    </div>
                </Col>
                <Col md={4} className={'d-flex justify-content-center align-items-center'}>
                    <div >
                        Адрес: {contact.address}
                    </div>
                </Col>
                <Col md={3} className={'d-flex justify-content-center align-items-center'}>
                    <div >
                        Телефон: {contact.phone}
                    </div>
                </Col>
                <Col md={1} className={'d-flex justify-content-center align-items-center'}>
                    <div className={'closer'} onClick={()=>{if(token){removeContact(token, contact.id)};}}>
                    </div>
                </Col>

            </div>
    );
});

export default ContactItem;