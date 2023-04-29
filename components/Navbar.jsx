import Link from 'next/link';

export default function Navbar({setSecret , setUsername}) {
  const onClick = () => {
    setSecret("")
    setUsername("")
  }

  return (
    <nav className="navbar">
      <Link href="/">
        <a className="navbar-brand">Chattopia</a>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="https://leetcode.com/ayushayushayush222/">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/">
            <a onClick={onClick} className="nav-link">Logout</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
