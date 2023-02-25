import axios from "axios";
var url = 'http://6cd2-2405-204-5707-7694-def5-7be1-b388-663d.ngrok.io'

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