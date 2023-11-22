import { Container, Nav, Navbar } from 'react-bootstrap/';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    const location = useLocation();
    return (
        <Navbar>
            <Container>
                <Nav className="ms-auto">
                    {(location.pathname === '/' || location.pathname === '/accueil') ? null : (
                        <Link to="/accueil" className="nav-link-custom">ACCUEIL</Link>
                    )}
                    {location.pathname !== '/projets' && (
                        <Link to="/projets" className="nav-link-custom">PROJETS</Link>
                    )}
                    {location.pathname !== '/contact' && (
                        <Link to="/contact" className="nav-link-custom">CONTACT</Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
