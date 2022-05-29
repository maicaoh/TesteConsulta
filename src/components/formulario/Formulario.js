import axios from "axios";
import React,{useEffect,useContext, useState} from "react";
import { Context } from "../../context/context";
import './formulario.css'
import { useNavigate  } from 'react-router-dom';

export default function Formulario(){
    const {user,genero,perfil,carregaDados,userEdit,operacao,setOperacao,setUserEdit} = useContext(Context);
    const [nomeInput,setNomeInput] = useState('');
    const [idadeInput,setIdadeInput] = useState('');
    const [generoInput,setGeneroInput] = useState(1);
    const [perfilInput,setPerfilInput] = useState(1);
    useEffect(()=>{
        if(userEdit.id){
        setPerfilInput(userEdit.perfilId)
        setNomeInput(userEdit.nome)
        setIdadeInput(userEdit.idade)
        setGeneroInput(userEdit.generoId)
    }
    },[userEdit])
    const history = useNavigate ();


    function objectSubmit(){
        let nome = nomeInput
        let idade = parseInt(idadeInput)
        let generoId = generoInput
        let perfilId = perfilInput
        return {nome,idade,generoId,perfilId}
    }

    function cadastrar(){
      const {nome,idade,generoId,perfilId} = objectSubmit()
        try{
            axios.post(`http://localhost:3000/usuario`,{nome,idade,generoId,perfilId}).then(()=>{
                alert('Usuário Cadastrado com Sucesso!')
                carregaDados();
                limpar()
                history('/')

            })
            .catch(err=>{throw err})
        }catch(err){
            alert(err)
        }
    }

    function editar(){
        const {nome,idade,generoId,perfilId} = objectSubmit()
        try{
            axios.put(`http://localhost:3000/usuario/${userEdit.id}`,{nome,idade,generoId,perfilId}).then(()=>{
                alert('Usuário Editado com Sucesso!')
                carregaDados();
                limpar()
                history('/')

            })
            .catch(err=>{throw err})
        }catch(err){
            alert(err)
        }
    }
    function validade(){
        if(operacao === 'new'){

            return !(user.map(ele=>ele.nome).indexOf(nomeInput) >= 0)
        }else{
            if(user.map(ele=>ele.nome).indexOf(nomeInput)<0){
                return true
            }else{
                return false
            }
          }
  
    }
    

    function submit(e){
        e.preventDefault();
        if(validade()){
            if(operacao === 'new'){
                cadastrar();
            }else{
                editar();
            }
        }else{
            alert('Erro - Usuário ja Registrado!')
        }
    }
    function limpar(e){
        setUserEdit({})
        setNomeInput('');
        setIdadeInput('');
        setOperacao('new');
    }

    return(
        <section className="cardFormulario" style={{padding:'49px 19px 50px 31px',marginTop:"5px"}}>
            <span className="titleFormulario">Novo usuario</span>
            <div>
                <form onSubmit={(e)=>submit(e)}>
                    <div style={{width:'716px'}}>
                    <div style={{display:'flex',flexDirection:'column',marginTop:'15PX'}}>
                        <span className="titleInput">Perfil</span>
                        <select value={perfilInput} onChange={(e)=>{setPerfilInput(e.target.value)}} className="input">
                            {perfil.map(element=>(
                                <option key={element.id} value={element.id}>{element.descricao}</option>
                            ))}
                        </select>
                        <span className="titleInput" style={{marginTop:'15px'}}>Nome</span>
                        <input required="required" value={nomeInput} onChange={(e)=>setNomeInput(e.target.value)} type="text" className="input"/>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between',marginTop:"15px"}}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <span className="titleInput">Idade</span>                        
                            <input min="1" required="required"  max="120" style={{width: '346px'}} type="number" className="inputShort" value={idadeInput} onChange={(e)=>{setIdadeInput(e.target.value)}}/>
                        </div>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <span className="titleInput">Genero</span>
                            <select value={generoInput} onChange={(e)=>{setGeneroInput(e.target.value)}} style={{width: '355px'}} className="inputShort">
                            {genero.map(element=>(
                                <option key={element.id} value={element.id}>{element.descricao}</option>
                            ))}
                            </select>    
                        </div>
                        
                    </div>
                    <div style={{display:'flex',justifyContent:'flex-end',marginTop:'15px'}}>
                        <button onClick={(e)=>{
                            e.preventDefault()
                            limpar()
                            }} className="btnLimpar"><span>Limpar</span></button>
                        <button type="submit" className="btnSalvar"><span>Salvar</span></button>
                    </div>
                    </div>
                </form>
            </div>
        </section>
    )
} 