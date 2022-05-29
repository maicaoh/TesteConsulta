import React,{createContext,useState,useEffect} from "react";
import axios from "axios";
 const Context = createContext();
 function ContextProvider({children}){
    const [operacao,setOperacao] = useState('new');
    const [user,setUser] = useState([]);
    const [genero,setGenero] = useState([]);
    const [perfil,setPerfil] = useState([])
    const [userEdit,setUserEdit] = useState({})

    
    function carregaDados(){

            axios.get('http://localhost:3000/usuario')
            .then((resp)=>{
                setUser(resp.data)
            })
   

            axios.get('http://localhost:3000/genero')
            .then((resp)=>{
                setGenero(resp.data)
            })
  

            axios.get('http://localhost:3000/perfil')
            .then((resp)=>{    
                setPerfil(resp.data)
            })
    }
    useEffect(()=>{
        carregaDados()
    },[])
   
    return( 
    <Context.Provider value={{user,setUser,genero,setGenero,perfil,setPerfil,carregaDados,userEdit,setUserEdit,operacao,setOperacao}}>
        {children}
    </Context.Provider>)
}
export {Context,ContextProvider}