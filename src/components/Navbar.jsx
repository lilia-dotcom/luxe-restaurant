import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${open ? "menu-open" : ""}`}>
      <a href="#top" className="navbar-logo" onClick={closeMenu}>
        L'ÉCLAT
      </a>

      <nav className="desktop-nav">
        <a href="#story">Story</a>
        <a href="#menu">Menu</a>
        <a href="#experience">Experience</a>
        <a href="#reservation">Reservations</a>
      </nav>

      <a
        href="#reservation"
        className="nav-reserve"
      >
        Reserve
      </a>

      <button
        className="mobile-menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="mobile-nav">
        <a href="#story" onClick={closeMenu}>
          Story
        </a>

        <a href="#menu" onClick={closeMenu}>
          Menu
        </a>

        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>

        <a href="#reservation" onClick={closeMenu}>
          Reservations
    
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>

      </div>
    </header>
  );
}

export default Navbar;