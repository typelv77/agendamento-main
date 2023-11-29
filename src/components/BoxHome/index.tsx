import "./style.css"


const BoxHome = () => {

 const handleModal = (switch:string) => {
    if (switch===open){
        document.querySelector("#open-menul").
    }

 }

    return <div id="Box-principal">
        <div id="box-1">
            <h1 id="titulo">Ambientes</h1>
        </div>
        <div className="list-box-l1" id="box-ll1"></div>
        <div className="list-box-l1" id="box-ll2"></div>
        <div className="list-box-l1" id="box-ll3"></div>
        <div className="list-box-l2" id="box-ll4"></div>
        <div className="list-box-l2" id="box-ll5"></div>
        <div className="list-box-l2" id="box-ll6"></div>
        <input id="input" type="" />
        <img id="img" src="public\lupa.png" alt="lupa" />
        <img id="barras" src="public\barras.png" alt="barras de opiçoes" />
        <img id="next-button" src="public\next.png" alt="next" />
        <img id="open-menul" src="public\close-menul.png" alt="close" />
        <span id="span" ></span>
        <div id="menul">
            <span className="list-modal">
                <img id="config" src="public\configuração.png" alt="configs" />
                <h1 className="list-modal" id="h1-configuracao">Configuração</h1>
            </span>
            <span className="list-modal">
                <img id="suport" src="public\icone-suporte.png" alt="sup" />
                <h1 className="list-modal" id="h2-suporte">Suporte</h1>

            </span>
            <span className="list-modal">
                <img id="saida" src="public\icone-saida.png" alt="exit" />
                <h1 className="list-modal" id="h3-sair">Sair</h1>
            </span>
            <img id="close-menul" src="public\close-menul.png" alt="close" />
        </div>
    </div>;
}
export default BoxHome;