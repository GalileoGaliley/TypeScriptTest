import {makeAutoObservable} from "mobx";
import auth from "../Components/Auth";
import User from "../models/User"
export default class UserStore{

    _auth:boolean;
    _user?:User;

    constructor(auth:boolean) {
        this._auth = auth;

        makeAutoObservable(this);
    };
    setAuth(bool:boolean){
        this._auth = bool;
    };
    setUser(user:User){
        this._user = user;
    };

    get Auth(){
        return this._auth
    };
    get User(){
        return this._user
    };

}
