import React,{useContext, useEffect} from "react";
import { IconCount } from "../../assests/icons";
import './card.css'
import usergroup from '../../assests/usergroup.svg';
import { Context } from "../../context/context";
import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Card(){
    const {user} = useContext(Context)
  
    return(
        <section className='centerCard'>
            <Header/>
        <div className='cardCount centerCard'>
          <div className='scardCount '>
        <div className="centerCard">
            <div style={{display:'flex'}}>
                <IconCount/>
                <span className="titleCounterUser">Contador Usuários</span>
            </div>
            <div className="subCardTotalUser">
                <div style={{display:'flex',alignItems:'center'}}>
                    <img style={{marginLeft:'10px'}} height={81} width={81} src={usergroup} alt="Grupos"/>
                    <span style={{fontStyle: 'normal',fontWeight: 100,fontSize: '48px',lineHeight: '56px',color: '#000000',marginLeft:'15px'}}>USUARIOS</span>
                </div>
                <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',marginRight:'46px'}}>
                    <span style={{fontStyle: 'normal',fontweight: 400,fontSize: '14px',lineHeight: '16px',color: '#000000'}} >TOTAL</span>
                    <span style={{fontStyle: 'normal',fontWeight: 700,fontSize: '36px',lineHeight: '42px',color: '#000000'}}>{user.length}</span>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',marginTop:'5PX'}}>
                <Link  tag={Link} to='/new' style={{textDecoration:'none',display:'flex',justifyContent:'center',textAlign:'center', background: '#056B8D',width: '136px',height: '25px',color:'white'}}><span>Lista de usuários</span></Link>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}