import mainLogo from "../assets/images/Logo.png"
import { Link }    from 'react-router-dom'
function Nav(){
    return(
        <nav className="navBar">
            <img src={mainLogo} alt="main logo"/>
            <div className="nav-container">
               <ul className="nav-list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/BookingForm'>Book a table</Link></li>
                    <li><Link to='/Footer'>About</Link></li>
                    <li><Link to='/LogIn'>Log In</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav