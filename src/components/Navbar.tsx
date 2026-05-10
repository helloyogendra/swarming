"use client";
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import './components.css';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar glass-card">
      <div className="container nav-container">
        <Link href="/" className="logo flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.png" alt="SwarmingAI Logo" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
          <span className="gradient-text">SwarmingAI</span>
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Courses</Link>
          <Link href="/services" className="nav-link">AI Services</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
          {session ? (
            <>
              <Link href="/profile" className="nav-link">Profile</Link>
              <button onClick={() => signOut()} className="btn btn-secondary">Logout</button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="btn btn-secondary">Login</Link>
              <Link href="/auth/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
