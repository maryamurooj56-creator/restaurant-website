import './App.css'

const dishes = [
  {
    name: 'Rigatoni alla vodka',
    description: 'Slow tomato, a little cream, parmesan, basil.',
    price: '$19',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85',
    alt: 'Fresh pasta with herbs and parmesan',
  },
  {
    name: 'Margherita pizza',
    description: 'San Marzano tomatoes, mozzarella, fresh basil.',
    price: '$17',
    image:
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=900&q=85',
    alt: 'A freshly baked Italian pizza',
  },
  {
    name: 'Tiramisu della casa',
    description: 'Espresso-soaked, cocoa-dusted, made every morning.',
    price: '$12',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85',
    alt: 'Homemade tiramisu finished with cocoa',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Olio home">
          <span className="wordmark-name">olio<span className="wordmark-dot">.</span></span>
          <small>TRATTORIA</small>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#menu">The menu</a>
          <a href="#story">Our story</a>
          <a href="#visit">Find us</a>
        </nav>
        <a className="header-booking" href="#visit">Book a table <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> YOUR LITTLE CORNER OF ITALY</p>
          <h1>Good food.<br />Long <em>evenings.</em></h1>
          <p className="hero-description">
            Handmade pasta, honest wine, and one more reason to stay a little longer.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">Come hungry <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#story">A bit about us <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-note">
            <span className="note-mark" aria-hidden="true">✳</span>
            <p>Made with love<br />in Brooklyn, NY</p>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1600&q=90"
            alt="A generous bowl of fresh pasta with herbs"
          />
          <div className="image-stamp">FATTO<br />A MANO</div>
          <p className="image-caption">Pasta made by hand, every single day.</p>
        </div>
      </section>

      <div className="details-strip" aria-label="Restaurant details">
        <p><span>01</span> Seasonal Italian cooking</p>
        <p><span>02</span> 58 DeGraw St, Brooklyn</p>
        <p><span>03</span> Dinner, Tuesday to Sunday</p>
      </div>

      <section className="menu-section section-wrap" id="menu">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span></span> A FEW HOUSE FAVORITES</p>
            <h2>A good place<br />to <em>start.</em></h2>
          </div>
          <p className="section-aside">Our menu follows the seasons and the whims of our kitchen. Here are a few things we love right now.</p>
        </div>
        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <article className="dish" key={dish.name}>
              <div className="dish-image-wrap">
                <img src={dish.image} alt={dish.alt} loading="lazy" />
                <span className="dish-number">0{index + 1}</span>
              </div>
              <div className="dish-title-row">
                <h3>{dish.name}</h3>
                <span>{dish.price}</span>
              </div>
              <p>{dish.description}</p>
            </article>
          ))}
        </div>
        <a className="menu-link" href="#visit">Come see what's cooking <span aria-hidden="true">↗</span></a>
      </section>

      <section className="story-section" id="story">
        <div className="story-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=85"
            alt="A bright dining room with tables beside the water"
            loading="lazy"
          />
          <span className="story-image-label">A TABLE IS ALWAYS READY</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span></span> PULL UP A CHAIR</p>
          <h2>Not fancy.<br />Just <em>really good.</em></h2>
          <p>Olio started with a simple idea: make the kind of food you want to share with people you love. So that's what we do. A little flour on the counter, something good on the stove, and room for one more at the table.</p>
          <a className="text-link" href="#visit">There's a seat for you <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-intro">
          <p className="eyebrow"><span></span> COME ON OVER</p>
          <h2>Your table<br />is <em>waiting.</em></h2>
          <a className="button button-light" href="tel:+17185550148">Call to book <span aria-hidden="true">↗</span></a>
        </div>
        <div className="visit-details">
          <div>
            <h3>Find us</h3>
            <p>58 DeGraw Street<br />Brooklyn, NY 11231</p>
            <a href="https://maps.google.com/?q=58+DeGraw+Street+Brooklyn+NY" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </div>
          <div>
            <h3>Come by</h3>
            <p>Tue–Thu, 5–10pm<br />Fri–Sun, 12–11pm<br />Monday, we rest</p>
          </div>
          <div>
            <h3>Say hello</h3>
            <a href="tel:+17185550148">(718) 555-0148</a>
            <a href="mailto:ciao@oliotrattoria.com">ciao@oliotrattoria.com</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#home"><span className="wordmark-name">olio<span className="wordmark-dot">.</span></span><small>TRATTORIA</small></a>
        <p>Good things take time. Dinner starts at five.</p>
        <a href="#home">Back to the top ↑</a>
      </footer>
    </main>
  )
}

export default App
