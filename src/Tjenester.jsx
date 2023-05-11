import React from "react";
import { Link } from "react-router-dom";
import courtImage from './images/Court.jpg';
import businessImg from "./images/Buisness-meeting.jpg"
import individualsImg from "./images/individualsImg.jpg"
import "./Tjenester.css"

function Tjenester() {
  return (
    <>
      <header>
      <nav>
          <ul>
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="/tjenester">Tjenester</Link></li>
            <li><Link to="/om-oss">Om Oss</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
        <h1>Tolk Margrit AS</h1>
      </header>
      <main>
        <section className="services">
          <h3>Våre Tjenester</h3>
          <div className="services-container">
            <div className="service-card">
              <img className="service-image" src={businessImg} alt="business meeting" />
              <h4>Tolketjenester for bedrifter</h4>
              <p>
                Vi tilbyr tolketjenester for bedrifter som trenger hjelp med
                kommunikasjon på tvers av språk.
              </p>
            </div>
            <div className="service-card">
              <img className="service-image" src={courtImage} alt="court room" />
              <h4>Tolketjenester for offentlig sektor</h4>
              <p>
                Vi har erfaring med tolking for offentlig sektor, inkludert
                rettssaker og møter med myndigheter.
              </p>
            </div>
            <div className="service-card">
              <img className="service-image" src={individualsImg} alt="individuals" />
              <h4>Tolketjenester for enkeltpersoner</h4>
              <p>
                Vi tilbyr også tolketjenester for enkeltpersoner som trenger hjelp
                med oversettelse.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <br />
        <br />
        <br />
        <h3>Logg inn for bestilling</h3>
        <Link to="/portal" className="portal-knapp">Portal</Link>
        <p>&copy; Tolk Margrit AS 2023</p>
      </footer>
    </>
  );
}

export default Tjenester;
