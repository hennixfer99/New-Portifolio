import { Switch, Route } from "react-router-dom";

import Homepage from "../pages/Homepage/Homepage";
import Projects from "../pages/Projects/Projects";
import Qualifications from "../pages/Qualifications/Qualifications";

function Routes(){
    return(
        <>
        <Switch>
            <Route exact path= "/">
                <Homepage />
            </Route>
        </Switch>
        <Switch>
            <Route exact path= "/projetos">
                <Projects />
            </Route>
        </Switch>
        <Switch>
            <Route exact path= "/qualificacoes">
                <Qualifications />
            </Route>
        </Switch>
        </>
    )
}

export default Routes