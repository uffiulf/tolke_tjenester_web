import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Index() {
  return (
    <div>
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
      {/* Rest of your content here */}
    </div>
  );
}

export default Index;
