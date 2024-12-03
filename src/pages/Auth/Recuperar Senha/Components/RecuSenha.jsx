import junin from '../../../../assets/images/juninRecSenha.png'
import logoBranca from '../../../../assets/images/logoBranca.png'
import "./recuSenha.css"

function RecuSenha() {
    return (
        <div className="container">
            <div className="imagens">
                <img src={logoBranca} alt="" className="logo" />
            </div>
            <div className="imagens1">
                <img src={junin} alt="" className="junin"/>
            </div>
        </div>
    )
}

export default RecuSenha