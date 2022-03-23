import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import ContactItem from "../Components/ContactItem";
import ModalState from "../Components/ModalState";
import {getAllContacts} from "../HTTP/contactAPI";
import {Contact} from "../Store/ContactsStore"

import {Button, Col, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import SearchElem from "../Components/searchElem";


const Account = observer(() => {
    const [search,setSearch] = useState<string>('')
    const context = useContext(Context);
    let user = context.us.User;
    console.log(context)
    let contacts = context.con
    let [token, setToken] = useState(user?.token)
    let [state, setState] = useState<number>(0)
    let [contactsState, setContactsState] = useState(contacts.Contact)
    const [middlewareArr,setMiddlewareArr] = useState<Contact[]>([])
    const Search = ()=>{
        let arr:Contact[]|undefined = contacts.Contact;
        let retArr:Contact[] = [];
        if (arr){
            arr.map((item,index)=>{
                let searching = search.toLowerCase();
                let maySearchable = item.name.toLowerCase();
                if (maySearchable.includes(searching)){
                    retArr.push(item);
                    console.log(item)
                }

            })
        }
        console.log(search)
        if(search == undefined){
            retArr = []
            setMiddlewareArr(retArr)
        }
        setMiddlewareArr(retArr)
    }
    useEffect(()=>{
        let tok = localStorage.getItem("token")
        if (tok){
            setToken(tok);
        }

    },[])
    useEffect(()=>{
        if (token){
            getAllContacts(token).then((data)=>{
                let arr:Contact[] = data.rows;
                function sort( a:Contact, b:Contact ) {
                    if ( a.name < b.name ){
                        return -1;
                    }
                    if ( a.name > b.name ){
                        return 1;
                    }
                    return 0;
                }

                contacts.setContact(arr.sort(sort))

                setContactsState(contacts.Contact)
            })
        }else {

        }
        console.log('logloglog')

    },[token, state])
        return (
            <>
                <div className={'accountPage'}>
                    <div className={'account '}>
                        <Row className={'w-100'}>
                            <Form>

                                <Col md={6} className={'w-auto d-flex justify-content-center align-items-center'}>
                                    <div className={'iconSearch mr-5'}>

                                    </div>
                                    <div className={'d-flex flex-column'}>
                                        <Form.Control className={'w-auto'} value={search} onChange={(event)=> {setSearch(event.target.value);
                                            console.log(search); Search();}} placeholder={'Введите имя контакта'} type={'text'} />
                                        <div className={'searchWindow'}>
                                            {middlewareArr?middlewareArr.map((item:Contact, index) =>
                                                <SearchElem key={index} name={item.name} id={item.id} lastname={item.lastname} phone={item.phone} />
                                            ):<></>}
                                        </div>
                                    </div>



                                </Col>

                            </Form>
                        </Row>

                        {contacts.Contact?contactsState?.map((item:Contact) =>

                            <ContactItem key={item.id} contact={item} fun={()=>{setState(state+=1); return}}/>

                        ):<></>}
                        <ModalState/>
                    </div>
                </div>

            </>
        );


});

export default Account;