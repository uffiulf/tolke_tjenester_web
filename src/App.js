import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importer dine komponenter her (erstatt "MinSide" med riktig komponentnavn)
import Hjem from './Hjem';
import Tjenester from './Tjenester';
import OmOss from './om-oss';
import Kontakt from './Kontakt';
import Bestill from './Bestill';
import Portal from "./Portal";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/tjenester" element={<Tjenester />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/bestill" element={<Bestill />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  );
};

export default App;
