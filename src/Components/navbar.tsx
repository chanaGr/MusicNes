import { MDBBreadcrumb} from "mdbreact";
import { NavLink } from "react-router-dom";
import './navbarc.css';



const NavBar = () => {
  return<>
  
      <MDBBreadcrumb  color="black" className="nav">
        <NavLink to="/HomePage"><img src="/MusicNes/logo.png"></img></NavLink> 
        <NavLink to="/About" className="navfont">About</NavLink>
        <NavLink to="/View" className="navfont">ViewProducts</NavLink>
        <NavLink to="/Manager" className="navfont">Manager</NavLink>
      </MDBBreadcrumb>
 <p>hfghg</p>
       
 </>
};

export default NavBar;
