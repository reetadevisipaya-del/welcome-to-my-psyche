/**
 * MY PSYCHE — SMAYRA | CINEMATIC CELESTIAL EXPERIENCE
 * Orchestration Engine: Particles, Parallax, Deck Draw, Audio, Lightbox & Cart Booking System
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarfieldCanvas();
  initParallaxEffects();
  initScrollAndNavigation();
  initDeckDrawFeature();
  initVideoPlayer();
  initLightbox();
  initTestimonialFilters();
  initReadingsCatalog();
  initCartSystem();
  initCelestialAudio();
});

/* ==========================================================================
   1. CENTRAL CONFIGURATION: 32 TAROT READINGS
   ========================================================================== */
const READINGS_DATA = [
  // LOVE & RELATIONSHIPS
  {
    id: 'love-reading',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Love Reading',
    price: 799,
    description: 'Explores current romantic energies, mutual emotional alignment, and emerging opportunities in your love life.'
  },
  {
    id: 'specific-person',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Specific Person Reading',
    price: 799,
    description: 'Deep dive into a specific individual\'s subconscious intentions, feelings toward you, and potential connection.'
  },
  {
    id: 'thoughts-feelings',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Thoughts & Feelings Reading',
    price: 699,
    description: 'Reveals what someone is consciously thinking versus what they are genuinely feeling beneath their exterior.'
  },
  {
    id: 'relationship-compatibility',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Relationship Compatibility',
    price: 999,
    description: 'Evaluates emotional, psychological, and spiritual compatibility to navigate strengths and friction points.'
  },
  {
    id: 'reconciliation-reading',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Reconciliation Reading',
    price: 899,
    description: 'Examines unresolved history, closure needs, and whether romantic reconnection is energetically favorable.'
  },
  {
    id: 'marriage-commitment',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Marriage & Commitment Reading',
    price: 999,
    description: 'Explores readiness for long-term commitment, mutual expectations, and future marital milestones.'
  },
  {
    id: 'relationship-dynamics',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Relationship Dynamics',
    price: 899,
    description: 'Uncovers recurring interpersonal cycles, communication gaps, and subconscious scripts shaping your bond.'
  },
  {
    id: 'past-relationship-closure',
    category: 'love',
    categoryName: 'Love & Relationships',
    name: 'Past Relationship & Closure',
    price: 799,
    description: 'Helps untangle lingering energetic ties, heal heartbreak, and achieve genuine emotional closure.'
  },

  // CAREER & FINANCE
  {
    id: 'career-reading',
    category: 'career',
    categoryName: 'Career & Finance',
    name: 'Career Reading',
    price: 799,
    description: 'Comprehensive assessment of current workplace atmosphere, vocational challenges, and growth trajectory.'
  },
  {
    id: 'career-opportunities',
    category: 'career',
    categoryName: 'Career & Finance',
    name: 'Career Opportunities',
    price: 799,
    description: 'Identifies incoming job offers, interview prospects, and strategic windows for professional advancement.'
  },
  {
    id: 'financial-reading',
    category: 'career',
    categoryName: 'Career & Finance',
    name: 'Financial Reading',
    price: 899,
    description: 'Analyzes financial habits, subconscious abundance blocks, and upcoming material resource shifts.'
  },
  {
    id: 'business-entrepreneurship',
    category: 'career',
    categoryName: 'Career & Finance',
    name: 'Business & Entrepreneurship',
    price: 999,
    description: 'Strategic divination for founders and creators: business feasibility, risk factors, and expansion timing.'
  },
  {
    id: 'education-academic-guidance',
    category: 'career',
    categoryName: 'Career & Finance',
    name: 'Education & Academic Guidance',
    price: 699,
    description: 'Clarity on degree choices, academic hurdles, exam focus, and university decision pathways.'
  },
  {
    id: 'career-direction-life-purpose',
    category: 'career',
    categoryName: 'Career & Finance',
    name: 'Career Direction & Life Purpose',
    price: 999,
    description: 'Aligns your everyday professional talents with your authentic soul vocation and deeper personal calling.'
  },

  // PERSONAL GROWTH & SELF-DISCOVERY
  {
    id: 'shadow-work-reading',
    category: 'growth',
    categoryName: 'Personal Growth & Self-Discovery',
    name: 'Shadow Work Reading',
    price: 1299,
    description: 'Brings suppressed emotions, unacknowledged triggers, and subconscious gold to conscious awareness.'
  },
  {
    id: 'inner-child-reading',
    category: 'growth',
    categoryName: 'Personal Growth & Self-Discovery',
    name: 'Inner Child Reading',
    price: 1199,
    description: 'Reconnects with developmental childhood wounds, restoring creative play, emotional safety, and trust.'
  },
  {
    id: 'self-discovery-reading',
    category: 'growth',
    categoryName: 'Personal Growth & Self-Discovery',
    name: 'Self-Discovery Reading',
    price: 999,
    description: 'A deep psychological mirror illuminating your core personality archetypes, strengths, and hidden blind spots.'
  },
  {
    id: 'emotional-patterns-reading',
    category: 'growth',
    categoryName: 'Personal Growth & Self-Discovery',
    name: 'Emotional Patterns Reading',
    price: 999,
    description: 'Identifies repetitive anxiety, overthinking, or defense mechanisms and provides constructive shifts.'
  },
  {
    id: 'personal-transformation',
    category: 'growth',
    categoryName: 'Personal Growth & Self-Discovery',
    name: 'Personal Transformation Reading',
    price: 1299,
    description: 'Navigates profound identity metamorphosis, shedding outgrown skins during pivotal life rebirths.'
  },
  {
    id: 'unconscious-patterns-archetypes',
    category: 'growth',
    categoryName: 'Personal Growth & Self-Discovery',
    name: 'Unconscious Patterns & Archetypes',
    price: 1299,
    description: 'Jungian archetypal diagnosis of the subconscious scripts, complexes, and mythic forces active in your life.'
  },

  // SPIRITUALITY
  {
    id: 'spiritual-growth',
    category: 'spirituality',
    categoryName: 'Spirituality',
    name: 'Spiritual Growth Reading',
    price: 999,
    description: 'Examines your spiritual evolution, karmic homework, and the intuitive faculties opening up in this chapter.'
  },
  {
    id: 'spiritual-journey',
    category: 'spirituality',
    categoryName: 'Spirituality',
    name: 'Spiritual Journey Reading',
    price: 999,
    description: 'Maps the spiritual landscape you are navigating and highlights guideposts from your higher intuition.'
  },
  {
    id: 'intuitive-guidance',
    category: 'spirituality',
    categoryName: 'Spirituality',
    name: 'Intuitive Guidance',
    price: 799,
    description: 'Grounding, heartfelt clarity when you feel spiritually disoriented or disconnected from your inner compass.'
  },
  {
    id: 'spiritual-transformation',
    category: 'spirituality',
    categoryName: 'Spirituality',
    name: 'Spiritual Transformation',
    price: 1299,
    description: 'Comprehensive navigation through intense spiritual awakenings, dark nights of the soul, and transcendent expansion.'
  },

  // GENERAL READINGS
  {
    id: 'one-question-clarity',
    category: 'general',
    categoryName: 'General Readings',
    name: 'One Question / Quick Clarity',
    price: 399,
    description: 'Laser-focused, direct tarot inquiry answering one pressing situation, decision, or immediate question.'
  },
  {
    id: 'general-tarot-reading',
    category: 'general',
    categoryName: 'General Readings',
    name: 'General Tarot Reading',
    price: 899,
    description: 'Broad overview surveying all life spheres: romance, professional direction, emotional state, and spiritual climate.'
  },
  {
    id: 'past-present-future',
    category: 'general',
    categoryName: 'General Readings',
    name: 'Past, Present & Future',
    price: 799,
    description: 'The foundational 3-card temporal spread exploring root causes, current dynamics, and emerging outcomes.'
  },
  {
    id: 'celtic-cross-reading',
    category: 'general',
    categoryName: 'General Readings',
    name: 'Celtic Cross Reading',
    price: 1499,
    description: 'The classic 10-card multidimensional diagnostic unravelling situation, challenges, subconscious roots, advice, and final culmination.'
  },
  {
    id: 'decision-making-reading',
    category: 'general',
    categoryName: 'General Readings',
    name: 'Decision-Making Reading',
    price: 799,
    description: 'Compares two or more potential paths side-by-side, analyzing likely energetic outcomes and trade-offs.'
  },
  {
    id: 'monthly-forecast',
    category: 'general',
    categoryName: 'General Readings',
    name: 'Monthly Forecast',
    price: 1299,
    description: 'A 30-day forecast breaking down the 4 weeks ahead, highlighting opportune days, cautions, and central archetypes.'
  },
  {
    id: 'annual-reading-12-months',
    category: 'general',
    categoryName: 'General Readings',
    name: 'Annual Reading (12 Months)',
    price: 2499,
    description: 'A master 12-card solar zodiac roadmap mapping the key theme, challenge, and opportunity for every month of your upcoming year.'
  },
  {
    id: 'deep-personalised-reading',
    category: 'general',
    categoryName: 'General Readings',
    name: 'Deep Personalised Reading',
    price: 1799,
    description: 'A custom, multi-deck holistic session tailored exclusively to your complex personal circumstances and inquiries.'
  }
];

const BUSINESS_EMAIL = 'samayraasipaya@gmail.com';

/* ==========================================================================
   2. CANVAS CELESTIAL STARDUST & TWINKLING ENGINE
   ========================================================================== */
function initStarfieldCanvas() {
  const canvas = document.getElementById('celestial-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particleCount = window.innerWidth < 768 ? 45 : 90;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.5,
      speedY: -(Math.random() * 0.25 + 0.05),
      speedX: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.7 + 0.2,
      opacityChange: (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      isGold: Math.random() > 0.45,
      glowRadius: Math.random() * 6 + 2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let p of particles) {
      if (!prefersReducedMotion) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += p.opacityChange;

        if (p.opacity > 0.95 || p.opacity < 0.15) {
          p.opacityChange = -p.opacityChange;
        }

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      if (p.isGold) {
        ctx.fillStyle = `rgba(207, 168, 68, ${p.opacity})`;
        ctx.shadowColor = 'rgba(232, 199, 102, 0.8)';
      } else {
        ctx.fillStyle = `rgba(212, 226, 244, ${p.opacity * 0.85})`;
        ctx.shadowColor = 'rgba(157, 141, 241, 0.7)';
      }

      ctx.shadowBlur = p.glowRadius;
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   3. PARALLAX & AMBIENT DEPTH CONTROLLER
   ========================================================================== */
function initParallaxEffects() {
  const portalWrap = document.querySelector('.portal-visual-wrap');
  const sunGlow = document.querySelector('.portal-sun-glow');
  const moonGlow = document.querySelector('.portal-moon-glow');
  const portraitFrame = document.querySelector('.editorial-portrait-frame');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 2;

    if (portalWrap) {
      portalWrap.style.transform = `perspective(1000px) rotateY(${xRatio * 3.5}deg) rotateX(${-yRatio * 3.5}deg) translateZ(8px)`;
    }

    if (sunGlow) {
      sunGlow.style.transform = `translate(calc(-50% + ${xRatio * 8}px), calc(-50% + ${yRatio * 8}px))`;
    }

    if (moonGlow) {
      moonGlow.style.transform = `translate(calc(-50% + ${xRatio * -6}px), ${yRatio * -6}px)`;
    }

    if (portraitFrame && window.innerWidth > 900) {
      portraitFrame.style.transform = `perspective(900px) rotateY(${xRatio * 2.5}deg) rotateX(${-yRatio * 2.5}deg)`;
    }
  });
}

/* ==========================================================================
   4. NAVIGATION & SMOOTH SCROLLING
   ========================================================================== */
function initScrollAndNavigation() {
  const navbar = document.querySelector('.celestial-navbar');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const enterBtn = document.querySelector('.enter-universe-btn');
  const skipIntroBtn = document.querySelector('.skip-intro-btn');
  const scrollCue = document.querySelector('.scroll-entrance-cue');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    navMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.textContent = '☰';
      });
    });
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('about-me');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (scrollCue) {
    scrollCue.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('about-me');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (skipIntroBtn) {
    skipIntroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('choose-reading');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   5. INTERACTIVE CARD DRAW: "SHUFFLE A CARD"
   ========================================================================== */
const ARCHETYPES = [
  {
    name: 'The Sun (XIX)',
    glyph: '☉',
    archetype: 'The Conscious Awakening & Vital Radiance',
    reading:
      'The Sun illuminates what was once obscured in the subconscious shadows. It signals that your clarity is returning, your personal truth is solidifying, and the fragmented pieces of your journey are aligning into integrated confidence.',
    prompt:
      'Where have you been withholding your natural warmth or doubtfully dimming your inner light?'
  },
  {
    name: 'The High Priestess (II)',
    glyph: '☽',
    archetype: 'The Subconscious Oracle & Inner Sanctum',
    reading:
      'Sitting at the veil between the conscious and unconscious realms, The High Priestess invites quiet introspection. You do not need external validation right now; the answers reside beneath the surface of noisy thoughts.',
    prompt:
      'What intuitive knowing have you been hesitating to acknowledge?'
  },
  {
    name: 'The Star (XVII)',
    glyph: '✦',
    archetype: 'The Renewal of Hope & Celestial Guidance',
    reading:
      'Following moments of disruption, The Star emerges as a quiet celestial promise. It represents healing of the psyche, restored faith in your path, and the serene knowledge that you are cosmically supported.',
    prompt:
      'What dream or aspiration is ready to be gently revitalized in your life?'
  },
  {
    name: 'The Magician (I)',
    glyph: '☿',
    archetype: 'The Master of Manifestation & Will',
    reading:
      'As above, so below. The Magician reminds you that you possess all four elemental tools—thought, passion, emotion, and tangible action. It is time to bridge intention into direct reality.',
    prompt:
      'What project or decision needs you to step forward as the conscious architect?'
  },
  {
    name: 'Wheel of Fortune (X)',
    glyph: '☸',
    archetype: 'The Cosmic Cycles & Karmic Pivot',
    reading:
      'A powerful pivot point in the cosmic cycle. As seen on Smayra\'s reading altar, the Wheel reminds us of life\'s perpetual movement. When you surrender resistance to change, momentum shifts in your favor.',
    prompt:
      'How can you embrace this transition as an evolutionary doorway rather than an obstacle?'
  },
  {
    name: 'The Empress (III)',
    glyph: '♀',
    archetype: 'The Creative Matrix & Abundant Nurturance',
    reading:
      'The Empress embodies the fertile ground of creation, sensory appreciation, and self-compassion. Whatever idea or relationship you are tending to is ready to bloom with organic ease.',
    prompt:
      'How can you offer yourself more gentle grace and creative nourishment today?'
  },
  {
    name: 'The Hermit (IX)',
    glyph: '🏮',
    archetype: 'The Solitary Lantern & Philosophical Truth',
    reading:
      'The Hermit calls for stepping back from collective chatter to walk your own inner path. True wisdom is distilled in moments of sacred silence and sincere self-examination.',
    prompt:
      'What boundary can you establish to protect your sacred solitude and focus?'
  }
];

function initDeckDrawFeature() {
  const flipper = document.querySelector('.tarot-card-flipper');
  const cardInner = document.querySelector('.tarot-card-inner');
  const drawBtn = document.querySelector('.draw-btn-trigger');
  const cardGlyph = document.querySelector('.drawn-card-glyph');
  const cardName = document.querySelector('.drawn-card-name');
  const cardArchetype = document.querySelector('.drawn-card-archetype');
  const resultBox = document.querySelector('.card-reading-result');
  const resultTitle = document.querySelector('.reading-archetype-title');
  const resultBody = document.querySelector('.reading-body-text');
  const resultPrompt = document.querySelector('.reading-prompt-action');

  let isFlipped = false;

  function performDraw() {
    const randomCard = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];

    if (isFlipped) {
      cardInner.classList.remove('flipped');
      isFlipped = false;
      setTimeout(() => {
        updateCardContent(randomCard);
        cardInner.classList.add('flipped');
        isFlipped = true;
      }, 400);
    } else {
      updateCardContent(randomCard);
      cardInner.classList.add('flipped');
      isFlipped = true;
    }
  }

  function updateCardContent(card) {
    if (cardGlyph) cardGlyph.textContent = card.glyph;
    if (cardName) cardName.textContent = card.name;
    if (cardArchetype) cardArchetype.textContent = card.archetype;

    if (resultTitle) resultTitle.textContent = `${card.name}: ${card.archetype}`;
    if (resultBody) resultBody.textContent = card.reading;
    if (resultPrompt) resultPrompt.innerHTML = `<strong>Reflective Inquiry:</strong> ${card.prompt}`;

    if (resultBox) {
      resultBox.classList.add('active');
    }
  }

  if (drawBtn) drawBtn.addEventListener('click', performDraw);
  if (flipper) flipper.addEventListener('click', performDraw);
}

/* ==========================================================================
   6. VIDEO TESTIMONIAL PLAYER WITH AUDIO
   ========================================================================== */
function initVideoPlayer() {
  const video = document.querySelector('.video-player-wrap video');
  if (!video) return;
  // Ensure audio is enabled and controls are active
  video.volume = 1.0;
  video.muted = false;
}

/* ==========================================================================
   7. LIGHTBOX FOR TESTIMONIALS & PICTURES AT WORK
   ========================================================================== */
function initLightbox() {
  const lightboxBackdrop = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightboxBackdrop || !lightboxImg) return;

  function bindLightboxTriggers() {
    const clickableItems = document.querySelectorAll('[data-lightbox-src]');
    clickableItems.forEach((item) => {
      item.onclick = () => {
        const src = item.getAttribute('data-lightbox-src');
        const caption = item.getAttribute('data-lightbox-caption') || '';

        lightboxImg.src = src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxBackdrop.classList.add('open');
        lightboxBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      };
    });
  }

  bindLightboxTriggers();

  function closeLightbox() {
    lightboxBackdrop.classList.remove('open');
    lightboxBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      lightboxImg.src = '';
    }, 300);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', (e) => {
    if (e.target === lightboxBackdrop) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxBackdrop.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   8. TESTIMONIAL CATEGORY FILTERS
   ========================================================================== */
function initTestimonialFilters() {
  const tabBtns = document.querySelectorAll('.test-tab-btn');
  const cards = document.querySelectorAll('.screenshot-card');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   9. CATALOG & READING SERVICE CARDS (32 READINGS)
   ========================================================================== */
function initReadingsCatalog() {
  const container = document.getElementById('readings-catalog-grid');
  const filterTabs = document.querySelectorAll('.category-tab-pill');

  if (!container) return;

  function renderReadings(activeCategory = 'all') {
    container.innerHTML = '';

    const filtered = activeCategory === 'all'
      ? READINGS_DATA
      : READINGS_DATA.filter((r) => r.category === activeCategory);

    filtered.forEach((reading) => {
      const card = document.createElement('article');
      card.className = 'reading-service-card';
      card.setAttribute('data-reading-id', reading.id);

      card.innerHTML = `
        <div>
          <div class="service-card-meta">
            <span class="service-category-badge">${reading.categoryName}</span>
            <span class="service-price-tag">₹${reading.price.toLocaleString('en-IN')}</span>
          </div>
          <h3 class="service-card-title">${reading.name}</h3>
          <p class="service-card-desc">${reading.description}</p>
        </div>
        <div class="service-card-actions">
          <button class="book-now-direct-btn" data-action="book-direct" data-id="${reading.id}">
            <span>Book Now</span>
            <span>➔</span>
          </button>
          <button class="add-to-cart-btn" data-action="add-cart" data-id="${reading.id}">
            <span>+ Add to Cart</span>
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    // Bind action buttons
    container.querySelectorAll('[data-action="book-direct"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const reading = READINGS_DATA.find((r) => r.id === id);
        if (reading) openDirectMailto(reading);
      });
    });

    container.querySelectorAll('[data-action="add-cart"]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        addToCart(id);
      });
    });
  }

  // Initial render of all readings
  renderReadings('all');

  // Filter tabs click
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      renderReadings(category);
    });
  });
}

/* ==========================================================================
   10. CART SYSTEM & EMAIL-BASED BOOKING (samayraasipaya@gmail.com)
   ========================================================================== */
let cartItems = [];

function initCartSystem() {
  const cartBtn = document.getElementById('nav-cart-btn');
  const cartBackdrop = document.getElementById('cart-drawer-modal');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsList = document.getElementById('cart-items-container');
  const cartTotalAmount = document.getElementById('cart-total-amount');
  const cartCountBadges = document.querySelectorAll('.cart-count-badge');
  const checkoutBtn = document.getElementById('cart-checkout-email');
  const gmailBtn = document.getElementById('cart-checkout-gmail');
  const waBtn = document.getElementById('cart-checkout-whatsapp');
  const copyBtn = document.getElementById('cart-copy-details');
  const toast = document.getElementById('cart-toast');

  // Load cart from localStorage
  try {
    const saved = localStorage.getItem('smayra_cart');
    if (saved) cartItems = JSON.parse(saved);
  } catch (e) {
    cartItems = [];
  }

  window.addToCart = function (readingId) {
    const reading = READINGS_DATA.find((r) => r.id === readingId);
    if (!reading) return;

    if (!cartItems.find((item) => item.id === readingId)) {
      cartItems.push(reading);
      saveCart();
      showToast(`Added "${reading.name}" to cart`);
    } else {
      showToast(`"${reading.name}" is already in your cart`);
    }

    updateCartUI();
  };

  window.removeFromCart = function (readingId) {
    cartItems = cartItems.filter((item) => item.id !== readingId);
    saveCart();
    updateCartUI();
  };

  function saveCart() {
    try {
      localStorage.setItem('smayra_cart', JSON.stringify(cartItems));
    } catch (e) {}
  }

  function updateCartUI() {
    const totalCount = cartItems.length;
    cartCountBadges.forEach((b) => (b.textContent = totalCount));

    if (!cartItemsList) return;

    if (totalCount === 0) {
      cartItemsList.innerHTML = `<div class="cart-empty-message">Your cart is empty. Explore our readings and select one to book.</div>`;
      if (cartTotalAmount) cartTotalAmount.textContent = '₹0';
      return;
    }

    cartItemsList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item) => {
      total += item.price;
      const row = document.createElement('div');
      row.className = 'cart-item-card';
      row.innerHTML = `
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div style="font-size: 0.72rem; color: var(--color-silver-moon); text-transform: uppercase;">${item.categoryName}</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</span>
          <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove reading">✕</button>
        </div>
      `;
      cartItemsList.appendChild(row);
    });

    if (cartTotalAmount) {
      cartTotalAmount.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
  }

  updateCartUI();

  // Drawer open / close
  function openCart() {
    if (cartBackdrop) {
      cartBackdrop.classList.add('open');
      cartBackdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  window.openCartDrawer = openCart;

  function closeCart() {
    if (cartBackdrop) {
      cartBackdrop.classList.remove('open');
      cartBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', (e) => {
      if (e.target === cartBackdrop) closeCart();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartBackdrop && cartBackdrop.classList.contains('open')) {
      closeCart();
    }
  });

  // Generate Booking Email
  function generateBookingEmailContent() {
    const name = document.getElementById('booking-client-name')?.value.trim() || '[Your Name]';
    const email = document.getElementById('booking-client-email')?.value.trim() || '[Your Email]';
    const dob = document.getElementById('booking-client-dob')?.value.trim() || '[Optional / Not Provided]';
    const question = document.getElementById('booking-client-question')?.value.trim() || '[Describe your question]';
    const context = document.getElementById('booking-client-context')?.value.trim() || '[Describe your context]';
    const specific = document.getElementById('booking-client-specific')?.value.trim() || '[Specific questions]';
    const format = document.getElementById('booking-client-format')?.value || 'Online Video Consultation';

    const selectedReadingsText = cartItems.map((item) => `${item.name} (₹${item.price.toLocaleString('en-IN')})`).join(', ');
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    const subject = `Tarot Reading Booking – ${cartItems.map((i) => i.name).join(' & ')}`;

    const body = `Hello,

I would like to book a tarot reading.

Reading Details

Selected Reading: ${selectedReadingsText}
Price: ₹${totalPrice.toLocaleString('en-IN')}

My Information

Name: ${name}
Email Address: ${email}
Date of Birth (Optional): ${dob}

About My Reading

What would you like to explore?
Please describe your question or concern:
${question}

Additional background or context:
${context}

Are there any specific questions you would like addressed?
${specific}

Preferred Reading Format:
${format}

Thank you. I look forward to hearing from you.`;

    return { subject, body };
  }

  // Robust Clipboard Copy with legacy fallback
  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg || '✓ Copied to clipboard!');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand('copy');
      showToast(successMsg || '✓ Copied to clipboard!');
    } catch (err) {
      showToast('✓ Details ready to send!');
    }
    document.body.removeChild(ta);
  }

  // 1. Send via Gmail (Opens directly pre-filled in Gmail Web / App)
  if (gmailBtn) {
    gmailBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast('Please add at least one reading to your cart first.');
        return;
      }
      const { subject, body } = generateBookingEmailContent();
      const fullText = `To: ${BUSINESS_EMAIL}\nSubject: ${subject}\n\n${body}`;
      copyTextToClipboard(fullText, 'Opening Gmail! Details also copied to clipboard.');

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(BUSINESS_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    });
  }

  // 2. Send via Default Mail App (Mailto via clean anchor trigger)
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast('Please add at least one reading to your cart first.');
        return;
      }

      const { subject, body } = generateBookingEmailContent();
      const fullText = `To: ${BUSINESS_EMAIL}\nSubject: ${subject}\n\n${body}`;
      copyTextToClipboard(fullText, 'Opening mail app! Details also copied to clipboard.');

      const mailtoUrl = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const a = document.createElement('a');
      a.href = mailtoUrl;
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 100);
    });
  }

  // 3. Send via WhatsApp
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast('Please add at least one reading to your cart first.');
        return;
      }
      const { subject, body } = generateBookingEmailContent();
      const waText = `*${subject}*\n\n${body}`;
      copyTextToClipboard(waText, 'Opening WhatsApp with your booking details!');

      const waUrl = `https://wa.me/?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 4. Copy Details Button
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast('Your cart is empty.');
        return;
      }
      const { subject, body } = generateBookingEmailContent();
      const fullText = `To: ${BUSINESS_EMAIL}\nSubject: ${subject}\n\n${body}`;
      copyTextToClipboard(fullText, '✓ Booking details copied! Ready to paste into any email or chat.');
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }
}

// "Book Now" Button on Reading Cards: Adds to cart & opens cart drawer
window.openDirectMailto = function (reading) {
  if (window.addToCart) window.addToCart(reading.id);
  if (window.openCartDrawer) window.openCartDrawer();
  const toast = document.getElementById('cart-toast');
  if (toast) {
    toast.textContent = `Selected "${reading.name}"! Fill out your details below to send your booking.`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3800);
  }
};

/* ==========================================================================
   11. AMBIENT CELESTIAL AUDIO (432Hz HARMONIC SYNTHESIZER)
   ========================================================================== */
function initCelestialAudio() {
  const soundBtn = document.querySelector('.sound-toggle-btn');
  if (!soundBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let masterGain = null;
  let oscillators = [];

  function createCelestialPad() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    const freqs = [108, 216, 432, 540, 648];

    oscillators = freqs.map((f) => {
      const osc = audioCtx.createOscillator();
      const oscGain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, audioCtx.currentTime);
      oscGain.gain.setValueAtTime(0.04 / freqs.length, audioCtx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
      return osc;
    });
  }

  function toggleAudio() {
    if (!audioCtx) createCelestialPad();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    if (!isPlaying) {
      masterGain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 2.5);
      isPlaying = true;
      soundBtn.innerHTML = '🔊';
      soundBtn.setAttribute('title', 'Mute celestial ambience');
    } else {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
      isPlaying = false;
      soundBtn.innerHTML = '🔇';
      soundBtn.setAttribute('title', 'Play celestial ambience');
    }
  }

  soundBtn.addEventListener('click', toggleAudio);
}
