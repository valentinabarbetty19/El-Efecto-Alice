import React from 'react'

const SignUp = ({language}) => {
  return (
    <div>    <div className="centeredBox">
    <div className="whiteBox">
      <h1 className="text"> {language === "español" ? "REGISTRARSE" : "SIGN UP"}</h1>
      {/* Content inside the white box */}
      <button className="button">
      <img
          className="buttonIcon"
          src="/assets/img/menu-Items/google.png" // Replace with your image URL
          alt="Button Icon"
        />
        <span className="buttonText">
          {language === "español" ? "Registrarse con Google" : "Sign up with Google"}
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