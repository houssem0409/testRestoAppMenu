

const url = "http://localhost:3000"

const getCategories = () : any => {
    console.log("whatttt");
    
    
    return fetch(`${url}/categories` , {
        method: "GET" ,
      
    })
    .then(response => {
        
        return response.json()

    })
    .catch(err => {
        console.log(err);
    })
}




const addCategories = (category : any) : any => {
    
    return fetch(`${url}/categories` , {
        method: "POST" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(category)
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}

const updateCategories = (category : any , id: any) : any => {
    
    return fetch(`${url}/categories/${id}` , {
        method: "PATCH" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(category)
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}


const deleteCategories = ( id: any) : any => {
    
    return fetch(`${url}/categories/${id}` , {
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
export default {getCategories , addCategories , updateCategories , deleteCategories}