import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { userContext } from '../../../Contexts/AuthContext';


const Header = () => {
    const { user, setUser, logOut } = useContext(userContext)
    let navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                setUser(null)
                navigate("/")
            }).catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand>
                <Link to='/'>
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                </Link>
            </Navbar.Brand>
            
            <Navbar.Collapse>
                <Navbar.Link>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to='/services'>Services</Link>
                </Navbar.Link>
                <Navbar.Link>
                    <Link to={'/blog'}>Blog</Link>
                </Navbar.Link>

                {user?.uid ?
                    <>

                        <Navbar.Link><Link to="/myreviews">My Reviews</Link></Navbar.Link>
                        <Navbar.Link><Link to='/addservice'>Add Service</Link></Navbar.Link>
                        <Navbar.Link><Link onClick={handleLogout}>Logout</Link></Navbar.Link>

                    </>
                    :
                    <>
                        <Navbar.Link>
                            <Link to={'/login'}>Login</Link>
                        </Navbar.Link>
                    </>
                }


            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;