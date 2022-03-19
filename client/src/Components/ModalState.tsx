import React, {useState} from 'react';
import ModalToCreate from "./ModalToCreate";
import {Button} from "react-bootstrap";

const ModalState = () => {

    const [state, setState] = useState(false);
    return (
        <div className={'mt-5'}>

            <Button onClick={()=>{setState(!state);
                console.log(state)}} variant={'dark'}>Создать!</Button>
            {state?
                <div onClick={()=>{setState(!state)}}>
                    <ModalToCreate/>
                </div>
                :
            <div></div>
            }
        </div>
    );
};

export default ModalState;