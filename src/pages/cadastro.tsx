import React from "react";
import { Link } from "react-router-dom"
import { IoLogoApple, IoLogoGoogle,IoLogoFacebook,} from "react-icons/io5";

import '../styles/pages/cadastro.css';

import LogoImg from '../images/LOGO LIGHT.svg';

function Cadastro() {
    return (
        <div id='page-cadastro'>
      <div>
        <img id='logo' src={LogoImg} alt="Cloud To Do" />

        <main>
          <h1>Inscreva-se</h1>
            <br />
          <ul>
            <li>
              <a href="#">
                <IoLogoGoogle id='ion-icon' size={20} color='black'/>
                Continua com Google
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoFacebook id='ion-icon' size={20} color='blue'/>
                Continua com Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoApple id='ion-icon' size={20} color='black'/>
                Continua com Apple
              </a>
            </li>
          </ul>
            <p></p>
          <div id="login">
            <label htmlFor="#">E-mail</label>
            <input type="e-mail" id='email' autoComplete='email' placeholder='Insira seu e-mail...' />
              <br />
            <label htmlFor="#">Password</label>
            <input type="password" id='password' placeholder='Insira sua senha...' />
              <br />
            <a href="#" id='button'>Entrar com e-mail</a>
              <br />
            {/*<Link to="/esqueceu" id='esqueceu'>Esqueceu sua senha?</Link>*/}
              <br />
          </div>
        
          <div id='rodape'>
            <span>
             Ao continuar com o Google, Apple ou e-mail, você está 
              concordando com os <Link to="/termsofservice">Termos de Serviço</Link> e <Link to="#">Política de 
              Privacidade</Link> do Cloud To do.
            </span>
              <br />
            <span>Já se cadastrou? <Link to="/" id='Cadastre'>Vá para o login</Link></span>
          </div>
        </main>
      </div>
    </div>
    );
}

export default Cadastro;