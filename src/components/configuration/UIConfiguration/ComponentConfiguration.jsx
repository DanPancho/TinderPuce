import React from "react";
import Configuration from "../Hooks/Configuration";

const ComponentConfiguration = () => {

  const {handleFile} = Configuration();

  return (
    <>
      <div
        className="card text-center position-absolute top-0 start-50 translate-middle-x mt-3"
        style={{ width: "90%" }}
      >
        <div className="card-head">
          <h1>Configuracion del Perfil</h1>
        </div>
        <div className="text-center">
          <img
            src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
            alt="img_user"
            className="card-img-top"
            style={{
              width: "50%",
              height: "40vh",
            }}
          />
        </div>

        <div className="card-body">
          <form>
            <div className="mb-4">
              <label>Cargar foto de perfil</label>
              <input type="file" className="form-control" onChange={handleFile}/>
            </div>

            <div className="form-floating">
              <select className="form-select" id="idGenero">
                <option value={1}>Hombre</option>
                <option value={2}>Mujer</option>
                <option value={3}>Otros</option>
              </select>
              <label htmlFor="idGenero">Selecciona tu género: </label>
            </div>

            <div className="form-floating mt-4">
              <select id="idGeneroP" className="form-select">
                <option value={1}>Hombre</option>
                <option value={2}>Mujer</option>
                <option value={3}>Ambos</option>
              </select>
              <label htmlFor="idGeneroP">Genero de preferencia:</label>
            </div>
            <div className="mt-3 form-floating">
              <input className="form-control" id="idCarrera" />
              <label htmlFor="idCarrera">
                Ingresa la carrera que estudias:{" "}
              </label>
            </div>
            <label className="mt-4">Gustos: </label>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <input className="form-check-input" type="checkbox" />
              </div>
              <input
                type="text"
                className="form-control"
                value={"Series"}
                disabled={true}
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <div className="input-group-text">
                <input type="checkbox" className="form-check-input" />
              </div>
              <input
                type="text"
                value={"Deportes"}
                disabled={true}
                className={"form-control"}
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <div className="input-group-text">
                <input type="checkbox" className="form-check-input" />
              </div>
              <input
                type="text"
                disabled={true}
                value="Peliculas"
                className="form-control"
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <div className="input-group-text">
                <input type="checkbox" className="form-check-input" />
              </div>
              <input
                type="text"
                disabled={true}
                value="Viajes"
                className="form-control"
              />
            </div>
            <div className="input-group mb-3 mt-3">
              <div className="input-group-text">
                <input type="checkbox" className="form-check-input" />
              </div>
              <input
                type="text"
                disabled={true}
                value="Estudios"
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Guardar Perfil"
              className="btn btn-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ComponentConfiguration;
