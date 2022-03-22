import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthPage from "./Pages/AuthPage";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";

function App() {


  return (
      <BrowserRouter >
          <AppRouter/>
      </BrowserRouter>

  );
}

export default App;
