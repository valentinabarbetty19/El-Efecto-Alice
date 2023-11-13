import React, { useState, useEffect, useCallback, useContext } from "react";
import "./Login.css";
import { useAuth } from '../../../context/AuthContext';
import { authContext } from "../../../context/AuthContext";

import swal from "sweetalert";
import { serviceLogin } from "../../../Services/serviceLogin";
import { useNavigate } from "react-router-dom";





const Login = ({ language }) => {

  const { setEmailUser } = useContext(authContext);

  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [usuarios, setUsuarios] = useState(null);

  const ServiceLogin = new serviceLogin();

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await auth.loginWithGoogle();
      console.log(response);
      setEmailUser(response.user.email);


      swal({
        title: "Login éxitoso",
        icon: "success",
      });

      navigate('/game');
    } catch (error) {
      setEmailUser('error');

      swal({
        title: "Login falló",
        icon: "error",
      });
    }
  }

  const handleLogin2 = async (e) => {
    try {
      e.preventDefault();
      const response = await auth.login(emailRegister, passwordRegister);
      console.log(auth.response)

      setEmailUser(emailRegister);

      swal({
        title: "Login éxitoso",
        icon: "success",
      });

      navigate('/game');

    } catch (error) {
      setEmailUser('error');

      swal({
        title: "Error en el Proceso de Login  Verifique sus Credenciales",
        icon: "error",
      });

    }


  }

  useEffect(() => {
    ServiceLogin.getUsers().then(data => {
      console.log(data);
      setUsuarios(data);
    })
  }, [])
  return (
    <div className="centeredBox">
      <div className="whiteBox">
        <h1 className="text"> {language === "español" ? "INICIAR SESIÓN" : "LOGIN"}</h1>

        <input onChange={(e) => setEmailRegister(e.target.value)} className='input' type='email' placeholder={language === "español" ? "correo" : "email"}/>
        <div style={{ padding: '10px' }}></div>
        <input onChange={(e) => setPasswordRegister(e.target.value)} className='input' type='password' placeholder={language === "español" ? "contraseña" : "password"}/>

        <button className="button" onClick={(e) => handleLogin2(e)}>

          <span className="buttonText">
            {language === "español" ? "Iniciar sesión" : "Log In"}
          </span>

        </button>

        <button className="button" onClick={(e) => handleLogin(e)}>
          <img
            className="buttonIcon"
            src="/assets/img/menu-Items/google.png" // Replace with your image URL
            alt="Button Icon"
          />
          <span className="buttonText">
            {language === "español" ? "Iniciar sesión con Google" : "Log in with Google"}
          </span>

        </button>
        <h3 className="texto">
          {language === "español" ? (
            <span>
              ¿Aún no tienes cuenta?{" "}
              <a href="/sign-up">Regístrate</a>
            </span>
          ) : (
            <span>
              Don't have an account yet? <a href="/sign-up">Sign up</a>
            </span>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Login;