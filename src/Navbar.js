import { Link } from "react-router-dom";
const Navbar = () =>{
  return (
    <div  className="navbarClass">
          <Link to="/country">Country</Link>
          <Link to="/posts">Posts</Link>
     </div>
  );
}

export default Navbar;