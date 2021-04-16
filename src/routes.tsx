import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

import Avaliation from "./pages/Avaliation";
import MedicalRecord from "./pages/MedicalRecord";
import PacientRegister from "./pages/PacientRegister";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Header>
          <Route exact path="/">
            <Redirect to="/pacient-register" />
          </Route>
          <Route path="/pacient-register" component={PacientRegister} />
          <Route path="/pacient-avaliation" component={Avaliation} />
          <Route path="/pacient-medical-record" component={MedicalRecord} />
        </Header>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
