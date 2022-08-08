import axios from "axios";
import { parse } from "path";
import { json } from "stream/consumers";

const url = "http://localhost:3000"

const getItems = () : any => {
    return fetch(`${url}/items` , {
        method: "GET" ,
      
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    })
}


const getItemsByCategories = (id : any) : any => {
    return fetch(`${url}/items/bycategories/${id}` , {
        method: "GET" ,
      
    })
    .then(response => {
        return response.json()
    })
    .catch(err => {
        console.log(err);
    })
}

const addItems = (item : any) : any => {
    
    return fetch(`${url}/items` , {
        method: "POST" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(item)
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}

const updateItems = (item : any , id: any) : any => {
    
    return fetch(`${url}/items/${id}` , {
        method: "PATCH" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(item)
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}


const deleteItems = ( id: any) : any => {
    
    return fetch(`${url}/items/${id}` , {
        method: "DELETE" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}
export default {getItems , addItems , updateItems , deleteItems , getItemsByCategories}