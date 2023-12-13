import axios from 'axios';

//https://el-efecto-alice-me-back.vercel.app 
//http://localhost:3000/

export class serviceLogin {

    
    getUsers = () => {
        return new Promise((resolve, reject) => {
                axios.get('https://el-efecto-alice-me-back.vercel.app/login').then(Response => {
                 

                    resolve (Response.data)
            })
            
        })    
    }

    postUsers = (nombre_usuario, correo, contraseña ) => {
        return new Promise((resolve, reject) => {
                axios.post('https://el-efecto-alice-me-back.vercel.app/registro',{nombre_usuario, correo, contraseña }).then(Response => {
                    resolve (Response.data)
            })
            
        })    
    }
    putUserEscenario = (correo, nuevoEstadoEscenario) => {
        return new Promise((resolve, reject) => {
            axios.put('https://el-efecto-alice-me-back.vercel.app/escenariousuarios', { correo, nuevoEstadoEscenario })
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    };
}