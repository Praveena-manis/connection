import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

function Header() {
    const { loggedIn, user } = useSelector((state) => state.user);
    console.log(user);
    
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch({ type: 'LOGOUT' });
      localStorage.removeItem('user');
    };
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
            {loggedIn ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link className="nav-link"  to="/login">Login</Link>
    )}
            </li>
            <li className="nav-item">
                <Link className="nav-link active"  to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='about'>About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='products'>Products</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='register'>Register Form</Link>
            </li>
            
        </ul>
    );
}

export default Header;