import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import Link from "next/link";



export default function Header() {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <header className="navbar">
        <span className="font-bold text-lg">Furniro</span>
        <nav className="nav-links">
          <Link legacyBehavior href="/" passHref>
            Home
          </Link>
          <Link legacyBehavior href="/shop" passHref>
            Shop
          </Link>
          <Link legacyBehavior href="/Homee" passHref>
            Blog
          </Link>
          <Link legacyBehavior href="/contact" passHref>
            Contact
          </Link>
        </nav>
        <div className="icons">
          <span><FaSearch /></span>
          <Link legacyBehavior href="/cart" passHref>
            <span><FaShoppingCart /></span></Link>
          <span><MdOutlineFavorite /></span>
        </div>
      </header>
    </div>
  );
}
