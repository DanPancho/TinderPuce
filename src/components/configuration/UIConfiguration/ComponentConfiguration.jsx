import React from "react";
import Configuration from "../Hooks/Configuration";
import Image from "next/image";
import {Helmet} from "react-helmet";



const ComponentConfiguration = () => {

  const {handleFile} = Configuration();

  return (
    <div class="container py-5 h-100" >
      <Helmet>
                <style>{'body { background-color: #c1ccd4; }'}</style>
      </Helmet>
        <div class="row d-flex justify-content-center align-items-center h-100 ">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-warning">
              <div className="card-head text-center">
                <h1>Configuracion del Perfil</h1>
              </div>
              <div className="text-center">
                <div class=" mt-3 mb-3 container-border text-center">
                  <Image class="rounded" src={"/img/USUARIOOSOJPG.jpg"} width={"200%"} height={"160%"}/>         
                </div> 
              </div>
              <div className="card-body">
                  <form>
                    <div className="mb-4">
                      <label className="mb-1">Cargar foto de perfil</label>
                      <input type="file" className="card bg-dark text-warning form-control" onChange={handleFile}/>
                    </div>

                    <div className="form-floating">
                      <select className="card bg-dark text-warning form-select" id="idGenero">
                        <option value={1}>Hombre</option>
                        <option value={2}>Mujer</option>
                        <option value={3}>Otros</option>
                      </select>
                      <label htmlFor="idGenero" className="">Selecciona tu género: </label>
                    </div>

                    <div className="form-floating mt-4">
                      <select id="idGeneroP" className="card bg-dark text-warning form-select">
                        <option value={1}>Hombre</option>
                        <option value={2}>Mujer</option>
                        <option value={3}>Ambos</option>
                      </select>
                      <label htmlFor="idGeneroP">Genero de preferencia:</label>
                    </div>

                    <div className="mt-3 form-floating">
                      <input className="card bg-dark text-warning form-control" id="idCarrera" />
                      <label htmlFor="idCarrera">
                        Ingresa la carrera que estudias:{" "}
                      </label>
                    </div>
                    <label className="mt-4">Gustos: </label>
                    <div className="input-group mb-3">
                      <div className="card bg-dark text-warning input-group-text">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                      <input
                        type="text"
                        className="card bg-dark text-warning form-control"
                        value={"Series"}
                        disabled={true}
                      />
                    </div>
                    <div className="input-group mb-3 mt-3">
                      <div className="card bg-dark text-warning input-group-text">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                      <input
                        type="text"
                        value={"Deportes"}
                        disabled={true}
                        className={"card bg-dark text-warning form-control"}
                      />
                    </div>
                    <div className="input-group mb-3 mt-3">
                      <div className="card bg-dark text-warning input-group-text">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                      <input
                        type="text"
                        disabled={true}
                        value="Peliculas"
                        className="card bg-dark text-warning form-control"
                      />
                    </div>
                    <div className="input-group mb-3 mt-3">
                      <div className="card bg-dark text-warning input-group-text">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                      <input
                        type="text"
                        disabled={true}
                        value="Viajes"
                        className="card bg-dark text-warning form-control"
                      />
                    </div>
                    <div className="input-group mb-3 mt-3">
                      <div className="card bg-dark text-warning input-group-text">
                        <input type="checkbox" className="form-check-input" />
                      </div>
                      <input
                        type="text"
                        disabled={true}
                        value="Estudios"
                        className="card bg-dark text-warning form-control"
                      />
                    </div>
                    <div className="mb-4 col text-center">
                      <input
                        type="submit"
                        value="Guardar Perfil"
                        className="btn btn-warning mx-1"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
};

export default ComponentConfiguration;
