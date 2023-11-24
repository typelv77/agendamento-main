import "./style.css"

const BoxHome = () => {
    return <div id="Box-principal">
        <div id="box-1">
            <h1 id="titulo">Ambientes</h1>
        </div>
        <div id="box-ll1"></div>
        <div id="box-ll2"></div>
        <div id="box-ll3"></div>
        <div id="box-ll4"></div>
        <div id="box-ll5"></div>
        <div id="box-ll6"></div>
        <input id="input" type="" />
        <img id="img" src="public\lupa.png" alt="lupa" />
        <img id="barras" src="public\barras.png" alt="barras de opiçoes" />
        <img id="next-button" src="public\next.png" alt="next" />
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
        </div>
    </div>;
}
export default BoxHome;