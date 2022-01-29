import { React } from "react";
import { Link } from "react-router-dom";
import pageData from "./a_bolsa_e_a_vida.json";

import "./TextPage.css";

function TextPage(props) {
  const mode = 1;

  return (
    <>
      <div className="parallax__wrapper">
        <div className="parallax__group content__group">
          <div className="parallax__layer mid__layer content__layer">
            <header>
              <nav className="nav">
                <Link to="/">Voltar</Link>
              </nav>
              <div className="banner__container">
                <h1>{pageData.title}</h1>
              </div>
            </header>
            <div>
              <h2>{pageData.elements[0].content}</h2>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
              <p>{pageData.elements[1].content}</p>
            </div>
          </div>
          <div className="parallax__layer top__layer top__2">
            <div className="cogu__icon">Cogu Icon</div>
          </div>
        </div>
        <div className="parallax__group group__1">
          <div className="parallax__layer base__layer base__1">Base</div>
          <div className="parallax__layer top__layer top__1">Top</div>
        </div>
        <div className="parallax__group group__2">
          <div className="parallax__layer base__layer base__2">
            Base Layer Page
          </div>
          <div className="parallax__layer top__layer top__2">
            <div className="cogu__icon">Cogu Icon</div>
          </div>
        </div>
      </div>

      {/* <div className="parallax__wrapper">
        <div id="intro" className="parallax__group intro__screen">
          <nav className="nav">
            <Link to="/">Voltar</Link>
          </nav>
          <h1>{pageData.title}</h1>
        </div>

        <div id="group-1" className="parallax__group">
          <div className="parallax__layer base__layer">Base Layer Page</div>
          <div className="parallax__layer mid__layer">
            <div>
              <h2>{pageData.elements[0].content}</h2>
              <p>{pageData.elements[1].content}</p>
            </div>
          </div>
        </div>

        <div id="group-2" className="parallax__group">
          <div className="parallax__layer mid__layer">Mid Layer Page</div>
          <div className="parallax__layer top__layer">Top Layer Page</div>
        </div>

        <div id="outro" className="parallax__group outro__screen">
          The End
        </div>
      </div> */}
    </>
  );
}

export default TextPage;
