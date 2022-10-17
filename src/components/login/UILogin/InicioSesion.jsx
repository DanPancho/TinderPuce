import React from "react";
import { IniciarSesion } from "../hooks/IniciarSesion";
import Image from "next/image";

const InicioSesion = () => {
  const { formik, onRegister } = IniciarSesion();
  return (
    <section className="vh-100" style={{backgroundColor: '#c1ccd4'}}>
      <div className="container py-5 h-100" >
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-warning">
                <div className=" mt-3 mb-3 container-border text-center">
                  <Image className="rounded" src={"/img/PUCETINDERJPG.jpg"} width={"230%"} height={"150%"}/>         
                </div>
                  <form className="px-5 form" onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    
                    <label className="w-100 form-label">Correo Institucional:</label>
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
                  <div className="mb-4 col text-center">
                    <input
                      className="btn btn-warning"
                      type="submit"
                      value="Iniciar Sesion"
                      name="password"
                    />
                    <input
                      type="button"
                      className="btn btn-warning mx-1"
                      value="Registrate!"
                      onClick={onRegister}
                      name="registro"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </section>  
  );
};

export default InicioSesion;


