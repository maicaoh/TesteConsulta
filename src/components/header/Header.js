import React from 'react';
import './header.css'
import icon from '../../assests/iconuser.svg'
export default function Header(){
    return(
        <section className='sectionHeader'>
        <div style={{fontWeight:'300px'}}>
            <span className='titleHeader'>Novel Consultoria</span><br/>
            <span  className='subTitleHeader'>Teste react</span>
        </div>
        <div className='dataUser'>
            <div className='descUser'>
                <span className='headerNome'>Michael Nunes</span>
                <span className='headerTipoUser'>ADMINISTRADOR</span> 
            </div>
            <div>
               <img src={icon} alt='user'/>
            </div>
        </div>
        </section>
    )
}