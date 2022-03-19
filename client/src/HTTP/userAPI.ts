import {$authHost, $host} from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (login:string, email:string, password:string) =>{
    console.log('start')
    const {data} = await $host.post('api/user/registration', {login, email, password});
    console.log(data)
    let user = jwt_decode(data.token);
    console.log(user)
    return (data);
};

export const login = async (loginOrEmail:string, password:string) =>{

    const {data} = await $host.post('api/user/login', {loginOrEmail, password});


    console.log(data.token);
    return (data);


};

export const check = async () => {
    try {

        const {data} = await $authHost.get('api/user/auth' );
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)

    }catch (e){
        console.log(e);
        console.log('error in userApi.Check')
    }
}

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
