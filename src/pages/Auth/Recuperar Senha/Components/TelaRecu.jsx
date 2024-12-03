import {FaUser, FaLock} from 'react-icons/fa';
import "./TelaRecu.css"

function TelaRecu() {
    return (
      <form className="container-form">
        <h1>Recuperação de Senha</h1>
<br />
        <div className="input-email">
        
          <input type="email" id="email" className="input" placeholder="Digite seu e-mail cadastrado na plataforma " />
          <FaUser className="icon"/>
        </div>
        <br />
        
        <div className="paragrafo">
        <p>Enviamos um e-mail para você com um código que permitirá a troca da sua senha. Por favor, insira o código recebido no campo abaixo para prosseguir com a alteração.</p>
        </div>
<br />
        <div className="input-codigo">
          <input type="number" id="codigo" className="input" placeholder="Informe o código recebido" />
        </div>
  
        <button className="button" >Enviar Código</button>
      </form>
    )
  }
  
  export default TelaRecu
  