import React from "react";
import { Link } from "react-router-dom"

import '../styles/pages/esqueceu.css';

import LogoImg from '../images/LOGO LIGHT.svg';

function Esqueceu() {
    return (
        <div id='page-esqueceu'>
      <div>
        <img id='logo' src={LogoImg} alt="Cloud To Do" />

        <main>
          <h1>Esqueceu sua senha?</h1>
            <br />
            <span>
                Para redefinir sua senha, por favor digite o endereço 
                de e-mail da sua conta do Cloud To do.
            </span>
          <div id="login">
            <label htmlFor="#">E-mail</label>
            <input type="e-mail" id='email' autoComplete='email' placeholder='Insira seu e-mail...' />
              <br />
            <a href="#" id='button'>Redefinir minha senha</a>
          </div>
        
          <div id='rodape'>
            <Link to="/" id='Voltar'>Ir para o login</Link>
          </div>
        </main>
      </div>
    </div>
    );
}

export default Esqueceu;