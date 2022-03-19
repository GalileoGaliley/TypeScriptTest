import React, {createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from "./Store/UserStore";
import ContactsStore from "./Store/ContactsStore";
import User from "./models/User";
export const Context = createContext({
    us: new UserStore(false),
    con: new ContactsStore()
})
export const useGlobalContext = () => useContext(Context)
ReactDOM.render(
    <Context.Provider value={{
        us: new UserStore(false),
        con: new ContactsStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
