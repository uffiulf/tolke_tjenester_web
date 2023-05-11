import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./Hjem.css";

function Hjem() {
  return (
    <div>
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
          <h3>Våre tjenester</h3>
          <ul>
            <li>
              <h4>Tolking for bedrifter</h4>
              <p>Vi tilbyr tolketjenester for bedrifter som trenger hjelp med kommunikasjon på tvers av språk.</p>
            </li>
            <li>
              <h4>Tolking for offentlig sektor</h4>
              <p>Vi har erfaring med tolking for offentlig sektor, inkludert rettssaker og møter med myndigheter.</p>
            </li>
            <li>
              <h4>Tolking for enkeltpersoner</h4>
              <p>Vi tilbyr også tolketjenester for enkeltpersoner som trenger hjelp med oversettelse.</p>
              <Link to="/bestill" className="cta-button">Bestill nå</Link>
            </li>
          </ul>
        </section>
        <section className="carousel" style={{ backgroundColor: "#f2f2f2" }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/fire_hender.jpg" className="d-block w-100" alt="Fire hender" />
            </div>
            <div className="carousel-item">
              <img src="./img/globus.jpg" className="d-block w-100" alt="Globus" />
            </div>
            <div className="carousel-item">
              <img src="./img/tagg_vegg.jpg" className="d-block w-100" alt="Tagg vegg" />
            </div>
            <div className="carousel-item">
              <img src="./img/Workplace.jpg" className="d-block w-100" alt="Workplace" />
            </div>
          </div>
        </section>
        <section className="about">
          <h3>Om Oss</h3>
          <p>Tolke Tjenester ble grunnlagt i 1993 og har siden den gang tilbudt tolketjenester av høy kvalitet til bedrifter, offentlig sektor og enkeltpersoner. Vi er stolte av å ha en av de mest erfarne tolkene i bransjen, som har over 30 års erfaring og en imponerende track record med fornøyde kunder.</p>
          <p>Vi har som mål å gjøre det lettere for folk å kommunisere på tvers av språk og kulturer, og vi jobber alltid hardt for å finne den beste løsningen for våre kunder. Ta kontakt med oss i dag for å få et tilbud på tolketjenester.</p>


          </section>
<section className="contact">
  <h3>Kontakt oss</h3>
  <form>
    <div className="form-group">
      <label htmlFor="name">Navn</label>
      <input type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
      <label htmlFor="email">E-post</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="form-group">
      <label htmlFor="message">Melding</label>
      <textarea className="form-control" id="message" rows="3"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Send</button>
  </form>
</section>
</main>
<footer style={{ backgroundColor: "#1d3557", color: "white" }}>
<p>&copy; Tolke Tjenester 2023</p>
</footer>
<script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</div>
);
}

export default Hjem;
