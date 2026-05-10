export default function Services() {
  return (
    <div className="container py-16 animate-fade-in max-w-5xl mx-auto">
      <h1 className="section-title text-center">Our <span className="gradient-text">AI Services</span></h1>
      <p className="hero-subtitle text-center mb-12">
        We provide cutting-edge Artificial Intelligence solutions to help businesses scale, innovate, and optimize their operations.
      </p>

      <div className="flex flex-col gap-8">
        <div className="glass-card p-8 border border-white/5">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            AI Consulting: Migrate legacy systems to AI enabled system
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Are your legacy systems holding back your business potential? Our expert AI Consulting services specialize in seamlessly migrating outdated infrastructure into modern, AI-enabled powerhouses. We analyze your current architecture, identify bottlenecks, and develop a strategic roadmap to integrate intelligent solutions. By modernizing your systems, we help you reduce operational costs, eliminate technical debt, and unlock new capabilities, ensuring your business remains competitive in an increasingly automated world.
          </p>
        </div>

        <div className="glass-card p-8 border border-white/5">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            AI Learning for Team Productivity
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Empower your workforce with the skills needed to thrive in the era of artificial intelligence. Our comprehensive AI Learning programs are designed specifically to boost team productivity across all departments. We provide hands-on training tailored to your business needs, teaching employees how to effectively leverage AI tools, automate routine tasks, and make data-driven decisions. Transform your team into forward-thinking innovators who can execute faster and smarter.
          </p>
        </div>

        <div className="glass-card p-8 border border-white/5">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            Business focused Small Scale LLM development
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Not every problem requires a massive, generic language model. We specialize in developing business-focused, small-scale Large Language Models (LLMs) trained specifically on your proprietary company data. These highly efficient, domain-specific models offer unparalleled accuracy and privacy while requiring significantly fewer computational resources. Whether you need specialized customer support, secure internal knowledge retrieval, or automated document analysis, our custom LLMs deliver targeted results without the overhead.
          </p>
        </div>

        <div className="glass-card p-8 border border-white/5">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            Smart AI Bot integration to website
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Revolutionize your customer engagement with our Smart AI Bot integration services. We design and deploy intelligent, conversational agents directly onto your website to provide instant, 24/7 support. Far beyond simple keyword-matching chatbots, our advanced AI bots understand context, manage complex inquiries, and drive sales conversions. Enhance your user experience, reduce customer service overhead, and ensure that every visitor receives immediate, personalized attention from the moment they arrive.
          </p>
        </div>

        <div className="glass-card p-8 border border-white/5">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            LLM Training
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Unlock the full potential of Large Language Models by training them to understand your unique business context. Our comprehensive LLM Training services cover everything from data preparation and fine-tuning to deployment. We guide your teams through the complexities of model optimization, ensuring you can build robust, customized AI solutions internally. Master the art of shaping language models to meet your exact organizational requirements and quality standards.
          </p>
        </div>
      </div>
    </div>
  );
}
