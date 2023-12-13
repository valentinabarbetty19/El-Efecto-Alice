import axios from 'axios';

//https://el-efecto-alice-me-back.vercel.app 
//http://localhost:3000/

export class serviceLogin {

    
    getUsers = () => {
        return new Promise((resolve, reject) => {
                axios.get('http://localhost:4000/login').then(Response => {
                 

                    resolve (Response.data)
            })
            
        })    
    }

    postUsers = (nombre_usuario, correo, contraseña ) => {
        return new Promise((resolve, reject) => {
                axios.post('http://localhost:4000/registro',{nombre_usuario, correo, contraseña }).then(Response => {
                    resolve (Response.data)
            })
            
        })    
    }
    putUserEscenario = (correo, nuevoEstadoEscenario) => {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:4000/escenariousuarios', { correo, nuevoEstadoEscenario })
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    };
}