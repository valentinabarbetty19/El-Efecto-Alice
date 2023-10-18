import axios from 'axios';



export class serviceLogin {

    
    getMail = () => {
        return new Promise((resolve, reject) => {
                axios.get(`http://localhost:3001/login`).then(Response => {
                 

                    resolve (Response.data)
            })
            
        })    
    }
}