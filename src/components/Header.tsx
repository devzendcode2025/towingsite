import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="BYD Towing LLC Logo" className="logo-image" width={150} height={50} />
          </Link>
        </div>
        <nav>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3"><Link href="#services" className="nav-link">Services</Link></li>
            <li className="nav-item me-3"><Link href="#about" className="nav-link">About Us</Link></li>
            <li className="nav-item"><Link href="#contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
