import axios from "axios";
// let baseUrl = "http://192.168.0.104:5000/api/";
let baseUrl = 'http://192.168.100.17:3000/HeartAttackDB/Users/';
// let baseUrl = "https://server-portal-pied.vercel.app/api/";
 
const api = async (path, params, method) => {
    let options;
    options = {
        headers: {
            "Content-Type": "application/json",
        },
        method: method,
        ...(params && { data: JSON.stringify(params) }),
    }
    return axios(baseUrl + path, options)
        .then((response) => {
            return response;
        }
    )
        .catch(async (error) => {
            console.log("err",error)
            return error.response;

        });

};


export default api;
