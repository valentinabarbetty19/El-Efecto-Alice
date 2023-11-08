import axios from 'axios';



export class serviceLogin {

    
    getUsers = () => {
        return new Promise((resolve, reject) => {
                axios.get(`http://localhost:4000/login`).then(Response => {
                 

                    resolve (Response.data)
            })
            
        })    
    }

    postUsers = (nombre_usuario, correo, contraseña ) => {
        return new Promise((resolve, reject) => {
                axios.post(`http://localhost:4000/registro`,{nombre_usuario, correo, contraseña }).then(Response => {
                    resolve (Response.data)
            })
            
        })    
    }
}