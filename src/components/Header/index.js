import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <img
      alt="website logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      className="website-logo"
    />
    <ul className="header-items-container">
      <Link to="/" className="nav-link">
        <li className="header-item">Home</li>
      </Link>
      <Link to="/products" className="nav-link">
        <li className="header-item">Products</li>
      </Link>
      <Link to="/cart" className="nav-link">
        <li className="header-item">Cart</li>
      </Link>
      <li className="header-item">
        <button type="button" className="logout-button">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)
export default Header
