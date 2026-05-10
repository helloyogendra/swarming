export default function Contact() {
  return (
    <div className="container py-16 animate-fade-in">
      <div className="max-w-2xl mx-auto glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="section-title text-center">Contact <span className="gradient-text">Us</span></h1>
        <p className="text-center text-secondary mb-8">
          Have questions about our courses or services? Send us a message and we'll get back to you shortly.
        </p>

        <form className="flex-col">
          <div className="form-group">
            <label className="form-label" htmlFor="name">Name</label>
            <input type="text" id="name" className="form-input" placeholder="Your Name" />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="form-input" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea id="message" className="form-input" rows={5} placeholder="How can we help you?"></textarea>
          </div>

          <button type="button" className="btn btn-primary btn-block mt-4">Send Message</button>
        </form>
      </div>
    </div>
  );
}
