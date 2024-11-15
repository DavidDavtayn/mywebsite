import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div className="logo">
                <img src="https://ld-wp73.template-help.com/wordpress/prod_10684/v2/wp-content/uploads/2020/11/logo.png" />
            </div>
            <ul>
                <li>
                    <Link to="/" className="home">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/Aboutpage">ABOUT</Link>
                </li>
                <li>
                    <Link to="/Services ">SERVICES</Link>
                </li>
                <li>
                    <Link to="/Projects">PROJECTS</Link>
                </li>
                <li>
                    <Link tp="/Team">TEAM</Link>
                </li>
                <li>
                    <Link to="/Blog">BLOG</Link>
                </li>
                <li>
                    <Link to="/Contacts">CONTACTS</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
