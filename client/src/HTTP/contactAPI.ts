import {$authHost, $host} from "./index";

export const getAllContacts = async (token:string) =>{
    console.log('start')
    const {data} = await $host.post('api/contact/getAll', {token});
    console.log(data)
    return (data);
};
export const createContact = async (name:string, lastname:string, email:string, phone:string,token:string,) =>{
    console.log('start')
    const {data} = await $host.post('api/contact/create', {name, lastname, email, phone, token});
    console.log(data)
    return (data);
};
export const removeContact = async (token:string, id:number) =>{
    console.log('start')
    const {data} = await $host.post('api/contact/remove', {token, id});
    console.log(data)
    return (data);
};




//
// import {$authHost, $host} from "./index";
// import jwt_decode from "jwt-decode";
//
// export const registration = async (email, password) => {
//     const {data} = await $host.post('api/user/registration', {email, password, role: 'ADMIN'})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
//
// export const login = async (email, password) => {
//     const {data} = await $host.post('api/user/login', {email, password})
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
//
// export const check = async () => {
//     const {data} = await $authHost.get('api/user/auth' )
//     localStorage.setItem('token', data.token)
//     return jwt_decode(data.token)
// }
