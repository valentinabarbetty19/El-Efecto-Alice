import React, { useEffect, useState } from "react";
import "./Login.css";
import { useAuth } from '../../../context/AuthContext';
import swal from "sweetalert";
import { serviceLogin } from "../../../Services/serviceLogin";


const Login = ({ language }) => {
  const auth = useAuth();
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [usuarios, setUsuarios] = useState(null);

  const ServiceLogin = new serviceLogin();


  const handleLogin = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
    console.log(auth.responseGoogle)

  }

  useEffect(() => {
    ServiceLogin.getUsers().then(data => {
      console.log(data);
      setUsuarios(data);
    })
  })
  return (
    <div className="centeredBox">
      <div className="whiteBox">
        <h1 className="text"> {language === "español" ? "INICIAR SESIÓN" : "LOG IN"}</h1>

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
