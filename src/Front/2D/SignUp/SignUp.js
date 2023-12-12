import React from 'react'
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { serviceLogin } from "../../../Services/serviceLogin";
import swal from "sweetalert"
import { useNavigate } from "react-router-dom";

const SignUp = ({ language }) => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const ServiceLogin = new serviceLogin();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const response = await auth.register(emailRegister, passwordRegister)
      console.log(emailRegister, passwordRegister)
      console.log(response)
      const nombre_usuario = emailRegister;
      const correo = emailRegister;
      const contraseña = passwordRegister;
  
  
      ServiceLogin.postUsers(nombre_usuario, correo, contraseña);
      swal({
        title: "Usuario Registrado",
        icon: "success",
      });
      navigate('/login');
      
    } catch (error) {
      swal({
        title: "Ingrese un formato de Correo Válido o una Contraseña con Más de seis Caracteres",
        icon: "error",
      });
      
    }
   

  }
  return (
    <div>    <div className="centeredBox">
      <div className="whiteBox">
        <h1 className="text"> {language === "español" ? "REGISTRARSE" : "SIGN UP"}</h1>
        {/* Content inside the white box */}
        <input onChange={(e) => setEmailRegister(e.target.value)} className='input' type='email' placeholder={language === "español" ? "correo" : "email"}/>
        <div style={{ padding: '10px' }}></div>
        <input onChange={(e) => setPasswordRegister(e.target.value)} className='input' type='password' placeholder={language === "español" ? "contraseña" : "password"}/>

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