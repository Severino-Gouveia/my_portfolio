import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import severinoImage from "../assets/images/severino.jpg";

const HomeInfo = ({ currentStage }) => {
  let content = null;

  switch (currentStage) {
    case 1:
      content = (
        <div className="flex flex-col md:flex-row justify-between items-center py-8 px-4 md:px-8 text-" >
          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Olá, eu sou{" "}
              <span className="text-neo-blue">Severino Gouveia</span> 👋
            </h1>
            <p className="text-lg md:text-xl font-medium">
              Desenvolvedor Web | Analista de Dados
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={severinoImage}
              alt="Severino Gouveia"
              className="mx-auto rounded-full shadow-lg"
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        </div>
      );
      break;

    case 2:
      content = (
        <div className="info-box bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg md:text-xl font-medium mb-4">
            Estou precisando de uma oportunidade para adquirir habilidades e
            construir minha carreira
          </p>
          <Link
            to="/about"
            className="bg-neo-blue text-white py-2 px-4 rounded-lg inline-flex items-center"
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
        <div className="info-box bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg md:text-xl font-medium mb-4">
            Quero construir vários projetos com sucesso. Curioso sobre?
          </p>
          <Link
            to="/projects"
            className="bg-neo-blue text-white py-2 px-4 rounded-lg inline-flex items-center"
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
        <div className="info-box bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg md:text-xl font-medium mb-4">
            Precisa de um projeto feito ou procura um desenvolvedor? Estou a
            apenas algumas teclas de distância
          </p>
          <Link
            to="/contact"
            className="bg-neo-blue text-white py-2 px-4 rounded-lg inline-flex items-center"
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

