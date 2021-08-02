import { Link } from 'react-router-dom'
let Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm naybg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src="/img/quikieapps.png" alt="Logo" height="40px" width="100px" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item mx-4">
            <Link className="nav-link" to="/">
              <h6 className="text-white">HOME</h6>
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link className="nav-link" to="View">
              <h6 className="text-white">View Saved</h6>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
