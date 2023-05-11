import { Link } from "react-router-dom";
import React from "react";

function Kontakt() {
  return (
    <div>
      <header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <div className="header-container">
        <nav>
          <ul>
            <li><Link to="/">Hjem</Link></li>
            <li><Link to="/tjenester">Tjenester</Link></li>
            <li><Link to="/om-oss">Om Oss</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
        </div>
        <h1>Tolk Margrit AS</h1>
      </header>
      <main>
        <section className="contact">
          <h4>
            Skriv gjerne til oss om du har spørsmål om våre tolketjenester eller
            ønsker å bestille en tolk?
          </h4>
          <p>
            Kontakt oss ved å fylle ut skjemaet under eller send en e-post til{' '}
            <a href="mailto:post@tolkemargrit.no">post@tolkemargrit.no</a>. Vi
            vil svare deg så snart som mulig.
          </p>
          <hr />
          <h2>Kontakt oss</h2>
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
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </section>
      </main>
      <footer>{/* footer-koden her */}</footer>
      <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Kontakt;
