import React from "react";
import { IniciarSesion } from "../hooks/IniciarSesion";

const InicioSesion = () => {
  const { formik, onRegister } = IniciarSesion();
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Correo Institucional:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text text-danger">
            {formik.errors.email}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            onChange={formik.handleChange}
            aria-describedby="passwordHelp"
          />
          <div className="form-text text-danger" id="passwordHelp">
            {formik.errors.password}
          </div>
        </div>
        <div className="mb-3 col text-center">
          <input
            className="btn btn-primary"
            type="submit"
            value="Iniciar Sesion"
            name="password"
          />
          <input
            type="button"
            className="btn btn-primary mx-1"
            value="Registrate!"
            onClick={onRegister}
            name="registro"
          />
        </div>
      </form>
    </>
  );
};

export default InicioSesion;
