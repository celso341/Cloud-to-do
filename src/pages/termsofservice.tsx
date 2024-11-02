import React from "react";
import { Link } from "react-router-dom"

import '../styles/pages/termsofservice.css';

import LogoImg from '../images/LOGO LIGHT.svg';

function termsofservice() {
    return (
        <div id='page-termsofservice'>
            <div>
              <Link to="/">
                <img id='logo' src={LogoImg} alt="Cloud To Do" /> 
              </Link>
        <main>
            <p></p>

          <div id='rodape'>
            <span>
                <h1>Termos de Serviço</h1> 
                    <br />
                   <strong> Última atualização: 30 de Outubro de 2024</strong> 
                    <br /> <br />
                    Bem-vindo ao Cloud To Do! Esses Termos de Serviço ("Termos") regem o uso do nosso 
                    aplicativo de gerenciamento de tarefas e serviços relacionados ("Serviços"). Ao acessar ou 
                    usar o Cloud To Do, você concorda em cumprir e estar vinculado a estes Termos. Se você 
                    não concorda com os Termos, não use nossos Serviços.
                    <br /> <br />
                    <strong>1. Descrição do Serviço </strong>
                    <br /><br />
                    O Cloud To Do é um aplicativo de gerenciamento de tarefas que permite aos usuários criar, 
                    organizar e gerenciar tarefas em uma plataforma baseada em nuvem. Nosso objetivo é 
                    ajudar os usuários a organizar melhor suas atividades pessoais e profissionais. 
                    <br /> <br />
                    <strong>2. Elegibilidade </strong>
                    <br /> <br />
                    Para usar o Cloud To Do, você deve ter pelo menos 13 anos de idade. Se você tiver entre 
                    13 e 18 anos, deverá obter o consentimento de seus pais ou responsável legal. 
                    <br /> <br />
                    <strong>3. Registro e Conta de Usuário </strong>
                    <br /><br />
                     - Para utilizar algumas funcionalidades do Cloud To Do, você pode precisar criar uma conta. <br />
                     - É sua responsabilidade fornecer informações verdadeiras e mantê-las atualizadas. <br />
                     - Você é responsável por proteger sua senha e por todas as atividades realizadas em sua conta. 
                    <br /> <br />
                    <strong> 4. Uso Aceitável </strong>
                    <br /> <br />
                    Você concorda em utilizar o Cloud To Do apenas para fins legais e de acordo com estes Termos. 
                    Ao usar os Serviços, você concorda em não: 
                    <br /> <br />
                     - Usar o Serviço para atividades ilegais ou não autorizadas. <br />
                     - Enviar conteúdo que seja ofensivo, difamatório, enganoso ou que infrinja os direitos de terceiros. <br />
                     - Tentar acessar ou comprometer a segurança do Cloud To Do ou de outros usuários. <br />
                    <strong>5. Privacidade </strong>
                    <br /> <br />
                    Nós respeitamos sua privacidade. Para informações sobre como coletamos, usamos e 
                    protegemos seus dados, consulte nossa Política de Privacidade. 
                    <br /> <br />
                    <strong>6. Propriedade Intelectual </strong>
                    <br /> <br />
                    Todos os direitos de propriedade intelectual sobre o Cloud To Do, incluindo, mas não se 
                    limitando a, software, logotipos, marca registrada e conteúdo, pertencem a nós ou a nossos 
                    licenciadores. Você não pode copiar, modificar, distribuir ou explorar qualquer parte do 
                    Serviço sem nossa permissão prévia por escrito. 
                    <br /> <br />
                    <strong>7. Assinaturas e Pagamentos </strong>
                    <br /> <br />
                     - O Cloud To Do oferece versões gratuitas e pagas do serviço. <br />
                     - As assinaturas pagas são cobradas no momento da compra e renovadas 
                       automaticamente, a menos que você cancele antes do término do período de renovação. <br /> <br />
                     - Todas as taxas são não reembolsáveis, exceto conforme exigido pela lei aplicável. 
                     <br /> <br />
                    <strong>8. Modificações no Serviço </strong>
                    <br /> <br />
                    Nós nos reservamos o direito de modificar ou descontinuar, temporária ou 
                    permanentemente, o Cloud To Do ou qualquer parte dele, a qualquer momento e sem aviso prévio. 
                    <br /> <br />
                    <strong>9. Limitação de Responsabilidade </strong>
                    <br /> <br />
                     - O Cloud To Do é fornecido "como está" e "conforme disponível". Não garantimos que 
                     o Serviço será ininterrupto ou isento de erros. <br />
                     - Em nenhum caso, nós seremos responsáveis por quaisquer danos indiretos, 
                     incidentais, consequenciais, especiais ou punitivos resultantes do uso ou da 
                     incapacidade de usar o Cloud To Do. 
                     <br /> <br />
                     <strong>10. Indenização</strong>
                    <br /> <br />
                    Você concorda em nos indenizar e isentar de responsabilidade contra qualquer reclamação, 
                    perda, responsabilidade, demanda ou despesa (incluindo honorários advocatícios) 
                    decorrente de sua violação destes Termos ou de seu uso indevido do Cloud To Do. 
                    <br /> <br />
                    <strong>11. Encerramento </strong>
                    <br /> <br />
                    Nós nos reservamos o direito de suspender ou encerrar sua conta e o acesso ao Cloud To Do 
                    a qualquer momento, sem aviso prévio, se acreditarmos que você violou estes Termos 
                    ou por qualquer outro motivo que considerarmos apropriado. 
                    <br /> <br />
                    <strong>12. Alterações aos Termos de Serviço </strong>
                    <br /> <br />
                    Podemos atualizar estes Termos de tempos em tempos para refletir mudanças em nossos 
                    serviços ou por outros motivos operacionais, legais ou regulamentares. Publicaremos a 
                    versão mais recente dos Termos no nosso site e notificaremos sobre qualquer alteração 
                    significativa. 
                    <br /> <br />
                    <strong>13. Contato <br /></strong>
                    Se você tiver dúvidas ou preocupações sobre estes Termos de Serviço, entre em contato conosco: 
                    <br /> <br />
                    <strong> - Email: suporte@cloudtodo.com </strong><br /><br />

                    <strong> Ao usar o Cloud To Do, você reconhece que leu, compreendeu e concorda em cumprir esses Termos de Serviço. <br /> </strong>

            </span>
          </div>
        </main>
      </div>
    </div>
    );
}

export default termsofservice;