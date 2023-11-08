import axios from 'axios';



export class serviceLogin {

    
    getUsers = () => {
        return new Promise((resolve, reject) => {
                axios.get(`http://localhost:4000/login`).then(Response => {
                 

                    resolve (Response.data)
            })
            
        })    
    }
}