import InputLogin from "../InputLogin";
import "./style.css";

const BoxWhiteLogin = () => {
  return <div id="boxWhiteLogin">
    <h1 id="title-app">Agendamento de Ambientes Educacionais</h1>
    <button id="botao">Continuar</button>
    <h2 id="title-login">Login</h2>
    <div id="boxWhiteLogin-gradient">
      <img id="art" src="public\art.png" alt="moça com pc olhando calendario" />
    </div>
    <img id="art-mobile" src="public\art-mobile.png" alt="moça com pc olhando calendario" />
    <img id="logo-senai" src="public\senai.png" alt="moça com pc olhando calendario" />

    <InputLogin image={"public/icone-email.svg"} type={"email"} alt={"Icone input de email"} idImg={"img-input-login-email"} idInput={"input-login-email"} />
    <InputLogin image={"public/icone-password.png"} type={"password"} alt={"Icone input senha"} idInput={"input-login-password"} idImg={"img-input-login-password"} />
    
  </div>;
};

export default BoxWhiteLogin;
