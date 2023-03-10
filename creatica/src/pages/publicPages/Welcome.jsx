import React from "react";
import Footer from "../../components/Footer";
import { HeaderHome } from "../../components/HeaderHome";
import { Link } from "react-router-dom";
import creatica12 from "../../assets/img/creatica12.svg";

export function Welcome() {
  return (
    <>
      <HeaderHome />
      <div>
        <h1>Desarrolla tu proyecto poniendo la vida en el centro</h1>
        <img
          src={creatica12}
          alt="Mujer meditando con un calendario y un reloj"
          className="my-image"
        ></img>
        <p className="text">
          Si no sabes por dónde empezar, este es tu lugar. Aquí podrás trabajar
          de manera más amable, consciente y respetuosa con tus ritmos.Es un
          espacio de trabajo, aprendizaje y creación donde encontrarás
          información y herramientas para poner en marcha tu idea.
        </p>
        <Link type="link" to="/UserMenu/">
          <button className="btn btn-outline btn-primary rounded-full m-5">
            EMPEZAR
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
