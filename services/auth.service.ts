const url = "http://localhost:3000"

const signinService = (user : any) : any => {
    
    return fetch(`${url}/users/signin` , {
        method: "POST" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}


const signupService = (user : any) : any => {
    
    return fetch(`${url}/users` , {
        method: "POST" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(user)
    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}


const getUserInfo = (token : String) : any => {
    
    return fetch(`${url}/users/userInfo` , {
        method: "POST" ,
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({token : token})

    }) .then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    })
}
export {signinService , getUserInfo , signupService}