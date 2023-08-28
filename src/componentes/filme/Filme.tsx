
import Imagem from "./../../assets/barbie.png"
import './Filme.css'
function Filme(){
    return(
        <div className="filme-content">
            Filme

        <img src={Imagem} alt=""/>
        <div className="text-barbie">
            <h1>Barbie</h1>
            <p className="sinopse">Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.</p>
        </div>
        </div>
    )
}
export default Filme
