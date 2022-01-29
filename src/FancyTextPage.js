import { Link } from "react-router-dom";
import { useParallax, Parallax } from "react-scroll-parallax";

import bordadoImg from "./bordado_duplo-ceu.png";

import "./FancyTextPage.css";

import pageData from "./a_bolsa_e_a_vida.json";

function FancyTextPage(props) {
  //   const { ref } = useParallax({ speed: 10 });
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <Link to="/">{"<-"}Voltar</Link>
        </nav>
        <h1 className="text__page__title">{pageData.title}</h1>
      </header>
      <div className="container flex-center">
        <div className="icon__container center">
          <Parallax translateX={["500px", "0px"]}>
            <div className="parallax__icon"></div>
          </Parallax>
        </div>
        <div className="icon__container center">
          <Parallax translateX={["-500px", "0px"]}>
            <div className="parallax__icon"></div>
          </Parallax>
        </div>
        <h2>{pageData.elements[0].content}</h2>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
        <div className="icon__container start">
          <Parallax speed={10}>
            <div className="parallax__icon"></div>
          </Parallax>
        </div>
        <div className="img__container bounded__img">
          <img className="" src={bordadoImg} alt="" />
          <p className="img__description">{pageData.elements[3].description}</p>
        </div>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
        <div className="img__container full__img">
          <img className="" src={bordadoImg} alt="" />
          <p className="img__description">{pageData.elements[3].description}</p>
        </div>
        <div className="icon__container start">
          <Parallax speed={10}>
            <div className="parallax__icon icon__drummond"></div>
          </Parallax>
        </div>
        <div className="icon__container center">
          <Parallax speed={-10}>
            <div className="parallax__icon"></div>
          </Parallax>
        </div>
        <div className="icon__container end">
          <Parallax speed={30}>
            <div className="parallax__icon icon__drummond"></div>
          </Parallax>
        </div>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
        <p>{pageData.elements[1].content}</p>
      </div>
      <div className="container flex-center references__container">
        <h2>Referências Bibliográficas</h2>
        <ul className="reference__list">
          {pageData.references.map((reference, index) => (
            <li>{reference}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FancyTextPage;
