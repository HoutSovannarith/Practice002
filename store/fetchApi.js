// My Editor is WebStorm so Port localhost is 63342
const BASE_URL = "http://localhost:63342/data/";

export async function getData(endPoint){
    try{
        const res = await fetch(BASE_URL + endPoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await res.json();
        return data;
    }catch (error){
        console.log(error);
    }
}