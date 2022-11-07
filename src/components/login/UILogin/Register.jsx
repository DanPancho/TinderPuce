import React from "react";
import NewRegister from "../Hooks/NewRegister";
import Image from "next/image";
import {Helmet} from "react-helmet";


const Register = () => {
  const { formik } = NewRegister();
  return (
     <div className="container py-5 h-100" >
          <Helmet>
                <style>{'body { background-color: #c1ccd4; }'}</style>
          </Helmet>
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-warning">
              <div className=" mt-3 mb-3 container-border text-center">
                  <Image className="border border-primary rounded" src={"/img/PUCETINDERJPG.jpg"} width={"230%"} height={"150%"}/>         
              </div>
              <form className="px-5 form" onSubmit={formik.handleSubmit} autoComplete={'off'} >
                <div className="mb-3">
                  <label className="w-100 form-label">Nombre: </label>
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
                    className="btn btn-warning mx-1"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;
