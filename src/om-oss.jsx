import React from 'react';
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function OmOss() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/public/index.html">Hjem</a></li>
            <li><a href="/public/tjenester/Tjenester.html">Tjenester</a></li>
            <li><a href="/public/om-oss.html">Om Oss</a></li>
            <li><a href="/public/kontakt.html">Kontakt</a></li>
          </ul>
        </nav>
        <h1>Tolk Margrit AS</h1>
      </header>
      <main>
        <section className="about">
          <h2>Om Oss</h2>
          <p>
            Tolk Margrit AS er en tolketjeneste som ble grunnlagt i 2005. Vårt mål
            er å hjelpe bedrifter, offentlig sektor og enkeltpersoner med å
            kommunisere på tvers av språkbarrierer.
          </p>
          <p>
            Vi har et bredt nettverk av tolker som behersker en rekke forskjellige
            språk, og vi tilbyr tolking både på stedet og over telefon.
          </p>
          <p>
            Våre kunder setter pris på vår raske og effektive service, og vi har
            et godt rykte i bransjen for vår pålitelighet og kvalitet.
          </p>
          <p>
            Ta gjerne kontakt med oss for å få mer informasjon om våre tjenester,
            eller for å be om et tilbud.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; Tolk Margrit AS 2023</p>
      </footer>
      <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </div>
  );
}

export default OmOss;
