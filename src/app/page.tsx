import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero container animate-fade-in">
        <h1 className="hero-title">
          Master <span className="gradient-text">Artificial Intelligence</span>
        </h1>
        <p className="hero-subtitle">
          Unlock your potential with our premium AI training courses. Learn from industry experts and build the future.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link href="/auth/register" className="btn btn-primary">Start Learning Now</Link>
          <Link href="/services" className="btn btn-secondary">Explore Services</Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section container mt-8">
        <h2 className="section-title text-center">Premium Program</h2>
        
        <div className="course-card glass-card max-w-4xl mx-auto">
          <div className="course-badge">Bestseller</div>
          <h3 className="text-3xl font-bold mb-6">Complete AI Engineering Bootcamp</h3>
          
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4 text-white">Course Syllabus</h4>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>Prompt Engineering</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>MCP Server</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>Advanced RAG and Agentic AI</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>Development and Automation using Microsoft Copilot Multi Agent System</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>Orchestrator/subagent patterns</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>Production Deployment</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>MLOps</span></li>
              <li className="flex items-start"><span className="text-pink-500 mr-2">✓</span> <span>Building end-to-end AI Application</span></li>
            </ul>
          </div>

          <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🎁</div>
            <h4 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
              Upcoming/Future Courses worth Rs. 100,000 will be free for "AI Engineering" course subscribers.
            </h4>
            <ul className="space-y-3 relative z-10 text-gray-300">
              <li className="flex items-start"><span className="text-violet-400 mr-3">✦</span> <span>Course 1 - Claude: Development and Automation using Claude Code Agents.</span></li>
              <li className="flex items-start"><span className="text-violet-400 mr-3">✦</span> <span>Course 2 - Amazon: Development and Automation using Amazon Agentic Platform System.</span></li>
              <li className="flex items-start"><span className="text-violet-400 mr-3">✦</span> <span>Course 3 - OpenClaw: detailed use cases.</span></li>
              <li className="flex items-start"><span className="text-violet-400 mr-3">✦</span> <span>Course 4 - Access to our live projects. (contribute and earn)</span></li>
            </ul>
          </div>

          <div className="mt-10 p-6 glass-card border border-white/5 bg-black/20">
            <h4 className="text-lg font-semibold mb-3">Overview</h4>
            <p className="text-gray-300 leading-relaxed italic">
              "AI Engineering is not something optional if you are working in the Software Industry, it is the most important skill irrespective of your role or designation and through this course we are covering the most important topics required for anyone to learn and work through AI Tools. AI learning curriculum is extremely vast and with our expert research we have removed the unnecessary part from our course."
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="text-sm text-gray-400 line-through">₹90,000.00</div>
              <div className="course-price">₹45,000.00</div>
            </div>
            <Link href="/auth/register" className="btn btn-primary w-full md:w-auto mt-4 md:mt-0 text-lg px-8 py-3">Enroll Now</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h4>Hands-on Projects</h4>
            <p className="text-secondary mt-2">Build real-world applications and add them to your portfolio.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">👨‍🏫</div>
            <h4>Expert Mentorship</h4>
            <p className="text-secondary mt-2">Get 1-on-1 guidance from top industry professionals.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🏆</div>
            <h4>Certification</h4>
            <p className="text-secondary mt-2">Earn an industry-recognized certificate upon completion.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
