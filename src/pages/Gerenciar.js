import React from "react";
import Table from "../components/table/Table";
import Formulario from "../components/formulario/Formulario";
import '../components/table/table.css'
function Gerenciar(){
    return(
        <div className="tableU">
            <Table/>
             <Formulario/>
        </div>
    )
   
}
export {Gerenciar}