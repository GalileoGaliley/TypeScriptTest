import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import ContactItem from "../Components/ContactItem";
import ModalState from "../Components/ModalState";
import {getAllContacts} from "../HTTP/contactAPI";
import {Contact} from "../Store/ContactsStore"
import {Context} from "../index";
const Account = observer(() => {

    const context = useContext(Context);
    let user = context.us.User;
    let contacts = context.con
    let token = user?.token
    useEffect(()=>{
        if (token){
            getAllContacts(token).then((data)=>{
                console.log(data);
                contacts.setContact(data.rows)
                console.log(contacts.Contact)
            })
        }

    },[])
        return (
            <>
                <div className={'accountPage'}>
                    <div className={'account '}>
                        {contacts.Contact?contacts.Contact.map((item:Contact) =>

                            <ContactItem key={item.id} name={item.name} id={item.id} lastname={item.lastname} phone={item.phone} address={item.address}/>

                        ):<></>}
                        <ModalState/>
                    </div>
                </div>

            </>
        );


});

export default Account;