
import './App.css';

const products = [
  {
    name: 'English Willow',
    description: 'Premium cricket bats for performance and balance.',
    tag: 'PREMIUM COLLECTION',
    icon: '🏏',
    price: 'Explore collection',
  },
  {
    name: 'Kashmir Willow',
    description: 'Quality willow bats for practice and match play.',
    tag: 'VALUE COLLECTION',
    icon: '🏏',
    price: 'Explore collection',
  },
  {
    name: 'Leather Batting Gloves',
    description: 'Comfort, grip and protection at the crease.',
    tag: 'PROTECTION',
    icon: '🥊',
    price: 'Explore collection',
  },
];

function App() {
  return (
    <div className="app">
      <div className="topbar">
        PREMIUM CRICKET EQUIPMENT & REPAIR SERVICES
      </div>

      <header className="navbar">
        <a href="#" className="brand">
          CRIC<span>FIX</span>PRO
          <small>CRICKET SALES & REPAIRS</small>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#repairs">Repairs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          ENQUIRE NOW ↗
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              BUILT FOR THE LOVE OF CRICKET
            </span>

            <h1>
              YOUR GAME.
              <br />
              YOUR <span>GEAR.</span>
              <br />
              OUR EXPERTISE.
            </h1>

            <p>
              Premium English Willow and Kashmir Willow bats,
              leather batting gloves and dependable repair
              services — all under one roof.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="primary-button">
                EXPLORE PRODUCTS ↗
              </a>
              <a href="#repairs" className="secondary-button">
                OUR REPAIR SERVICES
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>01</strong>
                <small>QUALITY PRODUCTS</small>
              </div>
              <div>
                <strong>02</strong>
                <small>EXPERT REPAIRS</small>
              </div>
              <div>
                <strong>03</strong>
                <small>CRICKET FIRST</small>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="art-circle"></div>
            <div className="art-label">THE CRICKET COLLECTION</div>
            <div className="hero-bat">🏏</div>
            <div className="art-bottom">
              <span>PRECISION</span>
              <span>PERFORMANCE</span>
            </div>
          </div>
        </section>

        <section className="categories" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">OUR COLLECTION</span>
              <h2>GEAR UP FOR THE GAME.</h2>
            </div>
            <p>Quality cricket essentials selected for players.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-visual">
                  <span className="product-tag">{product.tag}</span>
                  <span className="product-icon">{product.icon}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href="#contact">{product.price} ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="repair-section" id="repairs">
          <div>
            <span className="eyebrow">GIVE YOUR GEAR A SECOND LIFE</span>
            <h2>
              DON'T REPLACE IT.
              <br />
              <span>REPAIR IT.</span>
            </h2>
            <p>
              From damaged bat handles to worn-out glove
              stitching, we help restore your cricket equipment.
            </p>
            <a href="#contact" className="primary-button">
              ENQUIRE ABOUT A REPAIR ↗
            </a>
          </div>

          <div className="repair-box">
            <div>01 / BAT REPAIR</div>
            <div>02 / HANDLE & GRIP WORK</div>
            <div>03 / GLOVE STITCHING</div>
            <div>04 / GLOVE PADDING & PALM REPAIR</div>
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">WHY CRICFIXPRO?</span>
          <h2>MORE THAN A CRICKET SHOP.</h2>
          <p>
            We bring cricket equipment sales and repair
            services together, helping players find the right
            gear and keep it ready for the next innings.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">LET'S TALK CRICKET</span>
          <h2>READY FOR YOUR NEXT INNINGS?</h2>
          <p>Contact us for product enquiries and repair bookings.</p>
          <a href="mailto:yourshop@email.com" className="primary-button">
            CONTACT OUR SHOP ↗
          </a>
        </section>
      </main>

      <footer>
        <a href="#" className="brand">
          CRIC<span>FIX</span>PRO
        </a>
        <p>© 2026 CRICFIXPRO. ALL RIGHTS RESERVED.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
