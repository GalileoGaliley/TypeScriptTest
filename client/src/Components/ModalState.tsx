import React, {useContext, useEffect, useState} from 'react';
import ModalToCreate from "./ModalToCreate";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react";
import {Context} from "../index";

const ModalState = observer(() => {
    const context = useContext(Context);
    let user = context.us.User;
    const [state, setState] = useState<boolean>(false);
    return (
        <div className={'mt-5'}>

            <Button onClick={()=>{setState(!state);
                console.log(state)}} variant={'dark'}>Создать!</Button>
            {state?
                <div onClick={()=>{setState(!state)}}>
                    <ModalToCreate onClick={()=>setState}/>
                </div>
                :
            <div></div>
            }
        </div>
    );
});

export default ModalState;