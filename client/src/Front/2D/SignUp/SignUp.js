import React from 'react'
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import swal from "sweetalert"

const SignUp = ({ language }) => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister)
    if(!auth.email){
      swal("Ok")
    }else{swal("Ok")}
  }
  return (
    <div>    <div className="centeredBox">
      <div className="whiteBox">
        <h1 className="text"> {language === "español" ? "REGISTRARSE" : "SIGN UP"}</h1>
        {/* Content inside the white box */}
        <input onChange={(e) => setEmailRegister(e.target.value)} className='input' type='email' />
        <div style={{ padding: '10px' }}></div>
        <input onChange={(e) => setPasswordRegister(e.target.value)} className='input' type='email' />

        <button className="button" onClick={(e) => handleRegister(e)}>
          { /*   <img
          className="buttonIcon"
          src="/assets/img/menu-Items/google.png" // Replace with your image URL
          alt="Button Icon"
  />*/}
          <span className="buttonText">
            {language === "español" ? "Aceptar" : "Accept"}
          </span>

        </button>
        <h3 className="texto">
          {language === "español" ? (
            <span>
              ¿Ya tienes cuenta?{" "}
              <a href="/login">Inicia sesión</a>
            </span>
          ) : (
            <span>
              Already have an account? <a href="/login">Login</a>
            </span>
          )}
        </h3>
      </div>
    </div></div>
  )
}

export default SignUp