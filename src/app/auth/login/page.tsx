"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <div className="container py-16 flex justify-center items-center" style={{ minHeight: '80vh' }}>
      <div className="glass-card w-full" style={{ maxWidth: '400px' }}>
        <h2 className="section-title text-center mb-6">Welcome <span className="gradient-text">Back</span></h2>
        
        {error && <div style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="flex-col">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input 
              type="email" id="email" className="form-input" required 
              value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input 
              type="password" id="password" className="form-input" required 
              value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-secondary text-sm">
          Don't have an account? <Link href="/auth/register" className="text-primary" style={{ color: 'var(--primary-color)' }}>Register</Link>
        </p>
      </div>
    </div>
  );
}
