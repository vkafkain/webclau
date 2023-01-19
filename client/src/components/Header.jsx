import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        Blog talleres naturales
      </Link>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}
