// import axiosConfig from "./Config/axios.config";
import APIRequest from "./axios.config";

export function getRandomJoke(){
    return APIRequest.get('/', {
    validateStatus: function(status){
        return status < 500;
        }
    }); 
}