import React, { useState, useRef, useEffect } from 'react';
import {gapi} from "gapi-script";
import GoogleLogin from "react-google-login";
import { serviceLogin } from "../../../Services/serviceLogin";


export const Login = (props, {language}) => {

  const [usuarios, setUsuarios] = useState(null);
  const [clientID, setClienteID] = useState('');
  const[user, setUser] = useState({});
  const[nuevaPeticion, setNuevaPeticion] = useState('')


  
  const ServiceLogin = new serviceLogin();
 
    useEffect(() => {
        ServiceLogin.getMail().then(data => { 
          setUsuarios(data) ;
          
          console.log(data[0].key_google);

          setClienteID(data[0].key_google);

          console.log(data);
          setNuevaPeticion('11');
                });
    }, []);

    useEffect(()=>{
      const start = () =>{
        gapi.auth2.init({
          clientId: clientID || '235813725963-f4k3vdu80eolqbli8scgf8h2ln77smd9.apps.googleusercontent.com',
        })
      }
      gapi.load("client:auth2", start)
    },[nuevaPeticion])

    

    const onSuccess = (response)=>{
       setUser(response.profileObj);
       console.log(response.profileObj);
    }

    const onFailure = ()=>{
        console.log("Mal")
    }
    return (
     <div>
       <h1>Login</h1>
       <div>
        <GoogleLogin 
        clientId={clientID}
        onSuccess= {onSuccess}
        onFailure={onFailure}
        cookiePolicy='single_host_policity'/>
       </div>
       <div className={user? "profile":"hidden"}>
        <h3>{user.name}</h3>
       </div>
     </div>
    );
}

export default (Login)