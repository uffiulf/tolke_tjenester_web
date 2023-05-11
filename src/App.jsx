import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hjem from './Hjem';
import Tjenester from './Tjenester';
import OmOss from './OmOss';
import Kontakt from './Kontakt';
import Bestill from './Bestill';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Hjem} />
        <Route path="/tjenester" component={Tjenester} />
        <Route path="/om-oss" component={OmOss} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/bestill" component={Bestill} />
      </Switch>
    </Router>
  );
};

export default App;
