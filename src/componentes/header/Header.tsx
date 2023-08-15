import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div>
                <h1>Barbie</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contatos'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header