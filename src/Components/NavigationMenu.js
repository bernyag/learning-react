import{
    Link
  } from "react-router-dom"

function NavigationMenu(props){
    return(
        <div>
            <div className="font-bold py-3">
                MatchBall
            </div>
            <ul>
                <li>
                    <Link to="/" className="text-blue-500 py-3 border-t border-b block" onClick={props.closeMenu}>Inicio</Link>
                </li>
                <li>
                    <Link to="/results" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>Resultados</Link>
                </li>
                <li>
                    <Link to="/profile" className="text-blue-500 py-3 border-b block" onClick={props.closeMenu}>Perfil</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu