import React, {useContext, useEffect, useState} from 'react';
import ModalToCreate from "./ModalToCreate";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react";
import {Context} from "../index";

const ModalState = observer(() => {
    const [state, setState] = useState<boolean>(false);
    return (
        <div className={'mt-5'}>

            <Button onClick={()=>{setState(!state)}} variant={'dark'}>Создать!</Button>
            {state?
                <div onClick={()=>{setState(!state)}}>
                    <ModalToCreate />
                </div>
                :
            <div></div>
            }
        </div>
    );
});

export default ModalState;