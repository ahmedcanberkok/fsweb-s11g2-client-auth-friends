import axios from "axios";

export const axiosWithAuth = ()=>{
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "http://localhost:9000",
        headers: {
            Authorization: token
        }
    })
}