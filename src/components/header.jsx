import '../compcss/header.css'
import moon from '../assets/moon.png'
function Header() {
    return (
        <div className="header">
        <img src={moon} alt="Logo" className="logo" />
        <h2 className="header-title">Zenith Astrum</h2>
        <div className="nav-links">
            <div className="navlink">
                <a href="#about" className="navlinkfr">About</a>
            </div>
            <div className="navlink">
                <a href="#skills" className="navlinkfr">Skills</a>
            </div>
            <div className="navlink">
                <a href="#projects" className="navlinkfr">Projects</a>
            </div>
            <div className="navlink">
                <a href="#contact" className="navlinkfr">Contact</a>
            </div>
        </div>
    </div>
    )
}

export default Header;
