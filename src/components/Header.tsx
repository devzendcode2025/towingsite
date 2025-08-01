import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="BYD Towing LLC Logo" width={150} height={50} priority />
          </Link>
        </div>
        <nav>
          <ul className="navbar-nav">
            <li><Link href="#services" className="nav-link">Services</Link></li>
            <li><Link href="#about" className="nav-link">About Us</Link></li>
            <li><Link href="#contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
