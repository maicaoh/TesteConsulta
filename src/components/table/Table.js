import React,{useContext,useEffect} from "react";
import '../card/card.css'
import './table.css';
import IconBD from '../../assests/IconBD.svg';
import iconGeneroTable from '../../assests/iconGeneroTable.svg';
import iconIdadeTable from '../../assests/iconIdadeTable.svg';
import iconUserTable from '../../assests/iconUserTable.svg';
import iconEdit from '../../assests/iconEdit.svg';
import iconDelete from '../../assests/iconDelete.svg';
import { Context } from "../../context/context";
import axios from "axios";

export default function Table(){
    const {user,genero,perfil,setUserEdit,carregaDados,setOperacao} = useContext(Context)

    function deleteUser(user){
        if(window.confirm(`Deseja excluir esse usuário '${user.nome}'`))
        try{
            axios.delete(`http://localhost:3000/usuario/${user.id}`).then(()=>{
                alert('Usuário Excluido com Sucesso!')
                carregaDados();
            })
            .catch(err=>{throw err})
        }catch(err){
            alert(err)
        }
    }
    useEffect(()=>{
        console.log(user)
    },[user])

    return(
        <section className="cardTable">
            <div style={{display:'flex',marginBottom:'10px'}}>
                <img src={IconBD} alt="Banco de Dados"/>
                <span className="titleTable">Banco de dados</span>
            </div>
            <div>
                <table style={{width:'100%'}}>
                    <thead>
                        <tr  style={{textAlign:'left',backgroundColor:'#f8f8f8',border: '1px solid #F2F2F2'}}>
                            <th>
                                <img src={iconUserTable} alt="Nome"/>
                                <span className="titleTableHeader">Nome</span>
                            </th>
                            <th>
                                <img src={iconIdadeTable} alt="Idade" />
                                <span className="titleTableHeader">Idade</span>
                            </th>
                            <th>
                                <img src={iconGeneroTable} alt="Genero"/>
                                <span className="titleTableHeader">Genero</span>
                            </th>
                            <th>
                                <img src={iconUserTable} alt="Perfil"/>
                                <span className="titleTableHeader">Perfil</span>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {user.map((element,index)=>(
                        <tr key={element.id} className={index % 2 !== 0 ? 'corRowTablePar':''} style={{paddingLeft:'4px',paddingRight:'4px',border: '1px solid #F2F2F2'}}>
                            <td >
                                <span className="dataTable" style={{marginLeft:'4px'}}>{element.nome}</span>
                            </td>
                            <td>
                                <span className="dataTable">{element.idade}</span>
                            </td>
                            <td>
                                <span className="dataTable">{genero[element.generoId-1]?.descricao}</span>
                            </td>
                            <td>
                                <span className="dataTablePerfil">{perfil[element.perfilId-1]?.descricao}</span>
                            </td>
                            <td style={{textAlign:'end'}}>
                                <button onClick={()=>{
                                    setUserEdit(element)
                                    setOperacao('Edit')
                                    }} style={element.perfilId !== "2" ?{marginRight:'22px'}: {marginRight:'8.75px'}}><img src={iconEdit}  alt="Editar"/></button>
                                {element.perfilId === "2" ? (<button onClick={()=>{deleteUser(element)}} style={{marginRight:'4px'}}><img src={iconDelete} alt="Deletar"/></button>):''}
                            </td>
                        </tr>)
                       )}
                      
                    </tbody>
                </table>
            </div>
        </section>
    )
}