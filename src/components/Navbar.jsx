import { Search, User, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      {/* LOGO */}
      <div className="navbar-logo">
        <div className="marvel-logo">
          MARVEL
        </div>

        <span className="archive-text">
          THE ARCHIVES
        </span>
      </div>


      {/* NAVIGATION */}
      <nav className="navbar-links">

        <a href="#home" className="active">
          Home
        </a>

        <a href="#characters">
          Characters
        </a>

        <a href="#movies">
          Movies
        </a>

       

        <a href="#comics">
          Comics
        </a>

      
      </nav>


      {/* ACTIONS */}
      <div className="navbar-actions">

        <button
          className="nav-icon"
          aria-label="Search"
        >
          <Search size={17} />
        </button>

        <button
          className="nav-icon"
          aria-label="Profile"
        >
          <User size={17} />
        </button>

        <button
          className="mobile-menu"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>

      </div>

    </header>
  );
}

export default Navbar;