import React, { useContext } from "react";
import { HeaderUser } from "../../../components/HeaderUser";
/* import faseProto from "../../../assets/faseProto.png"
import faseProto2 from "../../../assets/faseProto2.png"; */
import { Link } from "react-router-dom";
import { TaskContext } from "../../../Context/TaskContext";
import Pdf from "../../../assets/pdf/Prototipado.pdf";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Phases() {
  const { savePhase } = useContext(TaskContext);
  const phase = { prototipado: true };

  function downloadPdf() {
    const fileName = "Prototipado.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>PROTOTIPADO</h2>
        <p>
          En la etapa de Prototipado volvemos las ideas realidad. Construir
          prototipos hace las ideas palpables y nos ayuda a visualizar las
          posibles soluciones. Además, pone de manifiesto elementos que debemos
          mejorar, refinar o cambiar antes de llegar al resultado final.
        </p>
        {/*         <img src={faseProto2}></img> */}
        <br />
        <h3>OBJETIVOS</h3>
        <ul>
          <li>Materializar la idea</li>
          <li>Resolver los problemas que surjan durante la construcción</li>
          <li>Conocer la viabilidad del producto</li>
        </ul>
        {/*         <img src={fasesProto}></img> */}
        <h3>MATERIAL</h3>
        <br />
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button className="btn btn-outline btn-accent rounded-full mt-3 mb-3" onClick={downloadPdf}>
          Descargar
        </button>
        <br />
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/phasesTesteo/">
          <button className="btn btn-outline btn-secondary rounded-full mt-3 mb-3" onClick={() => savePhase(phase)}>
            FASE COMPLETADA
          </button>
        </Link>
      </div>
      <Link type="link" to="/phasesCreacion/">
      <button><FontAwesomeIcon className="mr-4 ml-4" icon={faArrowLeft}/></button>
      </Link>
      <Link type="link" to="/phasesTesteo/">
      <button><FontAwesomeIcon className="mr-4 ml-4" icon={faArrowRight}/></button>
      </Link>
    </>
  );
}

export default Phases;
