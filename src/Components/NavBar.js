import logo from '../logo512.png';
import './Navbar.css'

function NavBar() {
    function changeBackground(e) {
      e.target.style.background = 'grey';
    }
    function revertBackground(e){
      e.target.style.background = "black";
    }
    return (
      <div className="Navbar">
        <button className="Navbar-logo" onMouseOver={changeBackground} onMouseLeave={revertBackground}><img src={logo} className="Navbar-logo-img" alt="logo" /></button>
        <button className="Navbar-text" onMouseOver={changeBackground} onMouseLeave={revertBackground}>Orders</button>
        <button className="Navbar-text" onMouseOver={changeBackground} onMouseLeave={revertBackground}>Payments</button>
        <button className="Navbar-text" onMouseOver={changeBackground} onMouseLeave={revertBackground}>Metrics</button>
        <button className="Navbar-set" onMouseOver={changeBackground} onMouseLeave={revertBackground}>Support</button>
        <button className="Navbar-set" onMouseOver={changeBackground} onMouseLeave={revertBackground}>Help</button>
        <button className="Navbar-set" onMouseOver={changeBackground} onMouseLeave={revertBackground}>Settings</button>
      </div>
    )
  }


  export default NavBar