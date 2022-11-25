import React from "react";
import Image from "next/image";

const Quienessomos = () => {
    return(
        <div className="container py-5 h-100 justify-content-center text-align-center">
            <div className="m-5 text-align-center">
                En Julio del año 2022 nace PuceTinder de la idea de llegar a conocer más gente, y sobre ligado al rubro de la búsqueda de una media naranja como se lo dice vulgarmente, buscando permanentemente mejorar las conexiones entre los alumnos de la Universidad.
                Es por eso que te invitamos a utilizar esta herramienta que se realizo con esta brecha que encontramos en la PUCE.
            </div>
            <div className="container d-flex aligns-items-center justify-content-center pt-5">
                <div className="col-md-2 d-flex aligns-items-center justify-content-center" >
                    <Image alt='img' className="rounded border border-primary" src={"/img/app1.jpg"} width={"230%"} height={"150%"}/>  
                </div>
                <div className="col-md-2 d-flex aligns-items-center justify-content-center ms-5">
                    <Image alt='img' className="rounded border border-primary" src={"/img/app2.webp"} width={"230%"} height={"150%"}/>         
                </div>
            </div>
            <div className="container d-flex aligns-items-center justify-content-center pt-5">
            
                <div className="col-md-2 d-flex aligns-items-center justify-content-center">
                    <Image alt='img' className="rounded border border-primary" src={"/img/app3.jpg"} width={"230%"} height={"150%"}/>         
                </div>
                <div className="col-md-2 d-flex aligns-items-center justify-content-center ms-5">
                    <Image alt='img' className="rounded border border-primary" src={"/img/app4.jpg"} width={"230%"} height={"150%"}/>         
                </div>
            </div>
        </div>
    );
};

export default Quienessomos;