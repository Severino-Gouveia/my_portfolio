import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import severinoImage from "../assets/images/severino.jpg";

const HomeInfo = ({ currentStage }) => {
  let content = null;

  switch (currentStage) {
    case 1:
      content = (
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-8 text-center">
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Olá, sou Severino Gouveia 👋
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Desenvolvedor Web | Analista de Dados
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="image-container rounded-full border-4 border-white overflow-hidden" style={{ maxWidth: "200px", maxHeight: "200px" }}>
              <img
                src={severinoImage}
                alt="Severino Gouveia"
                className="mx-auto"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      );
      break;
    

    case 2:
      content = (
        <div className="info-box bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <p className="text-lg md:text-xl font-medium mb-4">
            Estou precisando de uma oportunidade para adquirir habilidades e
            construir minha carreira
          </p>
          <Link
            to="/about"
            className="p-5 w-30 h-8 rounded-lg bg-white flex items-center justify-center font-bold shadow-md text-blue-600 mx-auto"
          >
            Saber mais{" "}
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 object-contain ml-2"
            />
          </Link>
        </div>
      );
      break;

    case 3:
      content = (
        <div className="info-box bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <p className="text-lg md:text-xl font-medium mb-4">
            Quero construir vários projetos com sucesso. Curioso sobre?
          </p>
          <Link
            to="/projects"
            className=" p-5 w-30 h-8 rounded-lg bg-white flex items-center justify-center font-bold shadow-md text-blue-600 mx-auto"
          >
            Visite meu portfólio{" "}
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 object-contain ml-2"
            />
          </Link>
        </div>
      );
      break;

    case 4:
      content = (
        <div className="info-box bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <p className="text-lg md:text-xl font-medium mb-4">
            Precisa de um projeto feito ou procura um desenvolvedor? Estou a
            apenas algumas teclas de distância
          </p>
          <Link
            to="/contact"
            className="p-5 w-30 h-8 rounded-lg bg-white flex items-center justify-center font-bold shadow-md text-blue-600 mx-auto"
          >
            Vamos conversar{" "}
            <img
              src={arrow}
              alt="arrow"
              className="w-4 h-4 object-contain ml-2"
            />
          </Link>
        </div>
      );
      break;

    default:
      break;
  }

  return <>{content}</>;
};

export default HomeInfo;

