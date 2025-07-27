import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Projects from "../pages/Projects/Projects";
import Qualifications from "../pages/Qualifications/Qualifications";
import Contact from "../pages/Contact/Contact";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Routes() {
    return (
        <>
            <Route exact path="/">
                <Redirect to="/sobre" />
            </Route>
            <Switch>
                <Route path="/sobre">
                    <Homepage />
                </Route>
            </Switch>
            <Switch>
                <Route path="/projetos">
                    <Projects />
                </Route>
            </Switch>
            <Switch>
                <Route path="/qualificacoes">
                    <Qualifications />
                </Route>
            </Switch>
            {/* <Switch>
                <Route path="/contato">
                    <Contact />
                </Route>
            </Switch> */}
        </>
    );
}

export default Routes;
