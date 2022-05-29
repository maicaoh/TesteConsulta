import React from "react";
import { Router,Route, BrowserRouter,Switch } from "react-router-dom";

import Card from "./components/card/Card";
import Table from "./components/table/Table"; 
import Formulario from "./components/formulario/Formulario";
import Gerenciar from "./pages/Gerenciar";

const Routes = () => {
   return(
       <Switch>
           <Route component={Gerenciar}  path="/" exact />
       </Switch>
   )
}

export default Routes;
