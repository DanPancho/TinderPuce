import React from "react";
import NewRegister from "../Hooks/NewRegister";

const Register = () => {
  const { formik } = NewRegister();
  return (
    <>
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre: </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            aria-describedby="nameHelp"
          />
          <div id="nameHelp" className="form-text text-danger">
            {formik.errors.name}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Institucional: </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
          />
          <div id="emailHelp" className="form-text text-danger">
            {formik.errors.email}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña: </label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            aria-describedby="passwordHelp"
            onChange={formik.handleChange}
          />
          <div id="passwordHelp" className="form-text text-danger">
            {formik.errors.password}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Confirmación de Contraseña: </label>
          <input
            className="form-control"
            type="password"
            name="cpassword"
            id="cpassword"
            aria-describedby="cpasswordHelp"
            onChange={formik.handleChange}
          />
          <div id="cpasswordHelp" className="form-text text-danger">
            {formik.errors.cpassword}
          </div>
        </div>
        <div className="mb-3 col text-center">
          <input
            className="btn btn-primary"
            type="submit"
          />
        </div>
      </form>
    </>
  );
};

export default Register;
