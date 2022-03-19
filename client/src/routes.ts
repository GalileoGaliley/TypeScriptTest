import AuthPage from "./Pages/AuthPage";
import Account from "./Pages/Account";
import {

    Account_Route,
    Login_Route,
    Registration_Route,

} from "./utils/constants";



export const authRoutes = [

    {
        path: Account_Route,
        Component: Account
    },
    
];
export const publicRoutes = [

    {
        path: Login_Route,
        Component: AuthPage
    },
    {
        path: Registration_Route,
        Component: AuthPage
    },

];