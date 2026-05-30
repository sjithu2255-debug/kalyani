import React from 'react';
import WhatsAppCTA from './components/WhatsAppCTA';
import heroImg from './assets/real_exterior.jpg';
import stageImg from './assets/real_stage.jpg';
import hallImg from './assets/real_outdoor_wedding.jpg';
import diningImg from './assets/real_dining.jpg';
import dressingImg from './assets/real_dressing.png';

function App() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul M.",
      text: "Excellent auditorium for weddings. The stage setup and lighting were fantastic. Very spacious and well maintained.",
      rating: 5,
      initial: "R"
    },
    {
      id: 2,
      name: "Sneha V.",
      text: "Attended a reception here. Good parking space and beautiful ambiance. Highly recommend it for events in Alappuzha.",
      rating: 4,
      initial: "S"
    },
    {
      id: 3,
      name: "Anand P.",
      text: "A premium venue located centrally in Sea View Ward. The management was cooperative and the facilities were top-notch.",
      rating: 4,
      initial: "A"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-content">
          <h1 className="hero-title">Kalyani Auditorium</h1>
          <p className="hero-subtitle">The Premium Venue for Your Grand Events in Alappuzha</p>
          <WhatsAppCTA>Book Now</WhatsAppCTA>
        </div>
      </section>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-text animate-fade-in-up">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About The Venue</h2>
            <h3>Elegance & Versatility</h3>
            <p>
              Located in the heart of Alappuzha at VCSB Road (Sea View Ward), Kalyani Auditorium is a premier event destination. Whether you are planning a magnificent wedding, a corporate gathering, a cultural program, or a seminar, our venue offers the perfect blend of modern amenities and elegant design.
            </p>
            <p>
              We pride ourselves on providing a well-equipped, spacious, and inviting atmosphere to make your special day truly memorable.
            </p>
            <div className="amenities-list">
              <div className="amenity-item"><i className="fas fa-check-circle"></i> Spacious Stage</div>
              <div className="amenity-item"><i className="fas fa-lightbulb"></i> Modern Lighting</div>
              <div className="amenity-item"><i className="fas fa-chair"></i> Elegant Seating</div>
              <div className="amenity-item"><i className="fas fa-parking"></i> Ample Parking</div>
            </div>
          </div>
          <div className="about-image animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img src={hallImg} alt="Kalyani Auditorium Event Hall" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item animate-fade-in-up">
              <img src={heroImg} alt="Auditorium Exterior" />
              <div className="gallery-overlay">
                <h4>Grand Exterior & Courtyard</h4>
              </div>
            </div>
            <div className="gallery-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img src={stageImg} alt="Wedding Stage" />
              <div className="gallery-overlay">
                <h4>Beautiful Stage Setups</h4>
              </div>
            </div>
            <div className="gallery-item animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <img src={hallImg} alt="Outdoor Event Setup" />
              <div className="gallery-overlay">
                <h4>Outdoor Wedding Arrangements</h4>
              </div>
            </div>
            <div className="gallery-item animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <img src={diningImg} alt="Dining Area" />
              <div className="gallery-overlay">
                <h4>Spacious Dining Area</h4>
              </div>
            </div>
            <div className="gallery-item animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <img src={dressingImg} alt="Dressing Room" />
              <div className="gallery-overlay">
                <h4>Premium Dressing Rooms</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials" id="reviews">
        <div className="container">
          <h2 className="section-title">What Our Guests Say</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#555', fontSize: '1.1rem' }}>
            Rated <strong>4.2 / 5</strong> stars on Google & Local Listings
          </p>
          <div className="testimonials-grid">
            {testimonials.map((review, index) => (
              <div className="testimonial-card animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }} key={review.id}>
                <div className="stars">
                  {[...Array(5)].map((star, i) => (
                    <i key={i} className={i < review.rating ? "fas fa-star" : "far fa-star"}></i>
                  ))}
                </div>
                <p className="testimonial-text">"{review.text}"</p>
                <div className="testimonial-author">
                  <div className="author-initial">{review.initial}</div>
                  <div className="author-name">{review.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Kalyani Auditorium</h3>
              <p><i className="fas fa-map-marker-alt"></i> VCSB Road (Sea View Ward), Alappuzha, Kerala</p>
              <p><i className="fas fa-phone-alt"></i> +91 9446516826</p>
              <p><i className="fas fa-envelope"></i> booking@kalyaniauditorium.com</p>
            </div>
            <div className="footer-cta">
              <h4>Ready to Host Your Event?</h4>
              <WhatsAppCTA className="btn btn-whatsapp" style={{ padding: '0.8rem 2rem' }}>
                Chat With Us Now
              </WhatsAppCTA>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Kalyani Auditorium. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919446516826?text=Hello,%20I%20would%20like%20to%20inquire%20about%20booking%20Kalyani%20Auditorium." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}

export default App;
