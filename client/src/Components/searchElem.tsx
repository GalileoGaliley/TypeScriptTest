import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Contact} from "../Store/ContactsStore";

const SearchElem = (contact:Contact) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    {contact.name + ' '+ contact.lastname}

                </Col>
            </Row>
        </div>
    );
};

export default SearchElem;