import "./Fundo.css"
import junin from "../../../assets/images/junin.png"
import logoBranca from "../../../assets/images/logoBranca.png"

function Fundo() {
    return (
        <div className="container">
            <div>
                <img src={logoBranca} alt="" className="logo" />
            </div>
            <div>
                <img src={junin} alt="" className="junin" />
            </div>
        </div>

    )
}

export default Fundo; 