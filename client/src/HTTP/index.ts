import axios from "axios";
import {queries} from "@testing-library/react";

const $host = axios.create({
    baseURL: "http://solar-wind.site:5000/"
});
const $authHost = axios.create({
    baseURL: "http://solar-wind.site:5000/"

});



export {
    $host,
    $authHost
}
