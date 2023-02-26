import axios from "axios";
var url = 'http://9df3-2405-204-5707-7694-e813-5e7-78fc-2bf8.ngrok.io'

export async function processLogin(data){
    const result = await axios.post(`${url}/loginlodge`, data);
    return result.data;
}

export async function allRooms(data){
    const result = await axios.post(`${url}/${data.userid}/false/roomlodge`, {
        headers: {
            "x-access-token" : data.token
        }
    });
    return result.data;
}

export async function getUserData(data, id){
    const result = await axios.post(`${url}/${id}/userroom`, data);
    return result.data;
}

export async function getUserDB(data, id){
    const result = await axios.post(`${url}/${id}/userdb`, {
        headers: {
            "x-access-token": data.token
        }
    });
    return result.data;
}

export async function getUserDbRoom(data, id){
    const result = await axios.post(`${url}/${id}/userdbroom`, data);
    return result.data;
}