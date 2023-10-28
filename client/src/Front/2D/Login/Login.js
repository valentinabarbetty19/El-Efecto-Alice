import React from "react";
import "./Login.css";
const Login = ({ language }) => {
  return (
    <div className="centeredBox">
      <div className="whiteBox">
        <h1 className="text"> {language === "español" ? "INICIAR SESIÓN" : "LOGIN"}</h1>
        {/* Content inside the white box */}
        <button className="button">
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
