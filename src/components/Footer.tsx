import Link from 'next/link';
import './components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h3 className="logo gradient-text">SwarmingAI</h3>
        <p className="footer-text">Empowering your future with cutting-edge AI education.</p>
        <div className="nav-links mt-4">
          <Link href="/services" className="nav-link">AI Services</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
          <Link href="/terms" className="nav-link">Terms & Conditions</Link>
        </div>
        <p className="footer-text mt-4">© {new Date().getFullYear()} SwarmingAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
