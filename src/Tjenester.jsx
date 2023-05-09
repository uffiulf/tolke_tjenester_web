

function Tjenester() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="/">Hjem</a></li>
            <li><a href="/tjenester">Tjenester</a></li>
            <li><a href="/om-oss">Om Oss</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
          </ul>
        </nav>
        <h1>Tolk Margrit AS</h1>
      </header>
      <main>
        <section className="services">
          <h3>Våre Tjenester</h3>
          <div className="services-container">
            <div className="service-card">
              <img src={businessImg} alt="business meeting" />
              <h4>Tolketjenester for bedrifter</h4>
              <p>
                Vi tilbyr tolketjenester for bedrifter som trenger hjelp med
                kommunikasjon på tvers av språk.
              </p>
            </div>
            <div className="service-card">
              <img src={courtImg} alt="court room" />
              <h4>Tolketjenester for offentlig sektor</h4>
              <p>
                Vi har erfaring med tolking for offentlig sektor, inkludert
                rettssaker og møter med myndigheter.
              </p>
            </div>
            <div className="service-card">
              <img src={individualsImg} alt="individuals" />
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
        <a href="/tjenester/Portal/portal.html" className="portal-knapp">
          Portal
        </a>
      </footer>

      <footer>
        <p>&copy; Tolk Margrit AS 2023</p>
      </footer>
      <script src="/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    </>
  );
}

export default Tjenester;
