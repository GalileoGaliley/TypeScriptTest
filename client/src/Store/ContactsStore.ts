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
    deleteContact(index:Contact){
        this._constacts?.slice(index.id,1)
    }
    get Contact(){
        return this._constacts;
    };
}