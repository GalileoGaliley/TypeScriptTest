import {makeAutoObservable} from "mobx";
export type Contact = {
    id: number;
    name: string;
    lastname: string;
    phone:string;
    address?:string;
}
export default class ContactsStore {

    _constacts?: Contact[];

    constructor() {

        this._constacts = []
        makeAutoObservable(this);
    };

    setContact(contacts: Contact[]) {
        this._constacts = contacts;
    };
    get Contact(){
        return this._constacts;
    };
}