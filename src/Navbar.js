import { Link } from "react-router-dom";

const Navbar = ()  => {
    return (
        <>
         <div >
        <nav >
            <ul className="main-nav">
                <ol>
                    <Link style={{textDecoration: 'none'}} to="/">Home</Link>
                </ol>
                <ol>
                    <Link style={{textDecoration: 'none'}} to="/events">Events</Link>
                </ol>
                <ol>
                    <Link style={{textDecoration: 'none'}} to="/aboutus">About Us</Link>
                </ol>
                <ol>
                    <Link style={{textDecoration: 'none'}} to="/contactus">Contact Us</Link>
                </ol>
            </ul>
            
        </nav>
        </div>
        
        </>
    )
}

// look to incorporate a styled component for LINK so I can style the text decoration to have no line, but also for the font not to change to red when I click on it.


export default Navbar;