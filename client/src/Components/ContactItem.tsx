import React, {useContext, useEffect,useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {Contact} from "../Store/ContactsStore";
import {removeContact} from "../HTTP/contactAPI"
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate,} from "react-router-dom";
import User from "../models/User";
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}
const ContactItem = observer((props:{contact:Contact,key:number, fun:any}) => {
    let navigate = useNavigate();
    console.log(props.key)
    const context = useContext(Context);
    let contacts = context.con.Contact
    let user = context.us.User;
    let token = user?.token;

    const forceUpdate = useForceUpdate();

    return (
            <div className={'d-flex justify-content-center align-items-center mt-3 contactItem'}>
                <Col md={3}>
                    <div className={'d-flex flex-column'}>
                        <p className={'mb-2'}>
                            Имя: {props.contact.name}
                        </p>
                        <p className={'mb-2'}>
                            Фамилия: {props.contact.lastname}
                        </p>

                    </div>
                </Col>
                <Col md={4} className={'d-flex justify-content-center align-items-center'}>
                    <div >
                        Адрес: {props.contact.address}
                    </div>
                </Col>
                <Col md={3} className={'d-flex justify-content-center align-items-center'}>
                    <div >
                        Телефон: {props.contact.phone}
                    </div>
                </Col>
                <Col md={1} className={'d-flex justify-content-center align-items-center'}>
                    <div className={'closer'} onClick={()=>{if(token){removeContact(token, props.contact.id);props.fun()}}}>
                    </div>
                </Col>

            </div>
    );
});

export default ContactItem;