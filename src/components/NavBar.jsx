import { Container, Nav, Navbar } from 'react-bootstrap/';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Fonts.css';

function NavBar() {
    const location = useLocation();
    return (
        <Navbar> 
            <Container>
                <Nav className='ms-auto'>
                    {(location.pathname === '/' || location.pathname === '/home') ? null : (
                        <Link to='/home' className='nav-link-custom'>Home</Link>
                    )}
                    {location.pathname !== '/about' && (
                        <Link to="/about" className="nav-link-custom">About</Link>
                    )}
                    {location.pathname !== '/projects' && (
                        <Link to="/projects" className="nav-link-custom">Projects</Link>
                    )}
                    {location.pathname !== '/contact' && (
                        <Link to="/contact" className="nav-link-custom">Contact</Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;

