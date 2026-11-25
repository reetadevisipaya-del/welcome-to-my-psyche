/**
 * MY PSYCHE — SMAYRA | CINEMATIC CELESTIAL EXPERIENCE
 * Orchestration Engine: Particles, Parallax, Deck Draw, Audio, Lightbox & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initStarfieldCanvas();
  initParallaxEffects();
  initScrollAndNavigation();
  initDeckDrawFeature();
  initVideoPlayer();
  initLightbox();
  initTestimonialFilters();
  initStoryAndDestinationModals();
  initCelestialAudio();
});

/* ==========================================================================
   1. CANVAS CELESTIAL STARDUST & TWINKLING ENGINE
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

  // Stardust & Star particle definitions
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
   2. PARALLAX & AMBIENT DEPTH CONTROLLER
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
   3. NAVIGATION, ENTRANCE CUES & SCROLL LOGIC
   ========================================================================== */
function initScrollAndNavigation() {
  const navbar = document.querySelector('.celestial-navbar');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const enterBtn = document.querySelector('.enter-universe-btn');
  const skipIntroBtn = document.querySelector('.skip-intro-btn');
  const scrollCue = document.querySelector('.scroll-entrance-cue');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  // Sticky Navbar state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
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

  // Smooth scroll transitions
  if (enterBtn) {
    enterBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('meet-practitioner');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (scrollCue) {
    scrollCue.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('meet-practitioner');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (skipIntroBtn) {
    skipIntroBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('enter-my-world');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
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
   4. INTERACTIVE CARD DRAW: "DRAW YOUR CELESTIAL ARCHETYPE"
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
    // Pick random archetype
    const randomCard = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];

    // If currently flipped, flip back first
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

  if (drawBtn) {
    drawBtn.addEventListener('click', performDraw);
  }

  if (flipper) {
    flipper.addEventListener('click', performDraw);
  }
}

/* ==========================================================================
   5. VIDEO TESTIMONIAL PLAYER CONTROLLER
   ========================================================================== */
function initVideoPlayer() {
  const video = document.querySelector('.video-player-wrap video');
  if (!video) return;

  // Let video be controlled via standard HTML5 controls
  video.addEventListener('play', () => {
    // Optionally dim background or pause background audio
  });
}

/* ==========================================================================
   6. IMAGE LIGHTBOX (FOR TESTIMONIALS & ALTAR PHOTOGRAPHY)
   ========================================================================== */
function initLightbox() {
  const lightboxBackdrop = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightboxBackdrop || !lightboxImg) return;

  // Listen on all clickable screenshot cards and altar cards
  const clickableItems = document.querySelectorAll('[data-lightbox-src]');

  clickableItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const caption = item.getAttribute('data-lightbox-caption') || '';

      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      lightboxBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightboxBackdrop.classList.remove('open');
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
   6B. TESTIMONIAL CATEGORY FILTERS
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
   7. STORY MODAL & DESTINATION DEEP-DIVES
   ========================================================================== */
const DESTINATIONS_DATA = {
  library: {
    title: 'The Tarot Library',
    subtitle: '78 Archetypes of the Human Experience',
    content: `
      <p class="modal-lead">The Tarot is not an oracle of fatalistic prediction; it is an illustrated encyclopedia of the subconscious mind.</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">The Major Arcana (The Fool's Journey)</h4>
        <p>From Card 0 (The Fool) stepping off the precipice of pure potential to Card XXI (The World) achieving psychological individuation, the 22 Major Arcana cards map the universal stages of human psychological evolution.</p>
      </div>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">The Four Minor Arcana Elemental Realms</h4>
        <ul>
          <li><strong>Wands (Fire):</strong> Passion, creative impulse, willpower, vital libido.</li>
          <li><strong>Cups (Water):</strong> Emotional landscapes, dreams, unconscious feelings, relational intimacy.</li>
          <li><strong>Swords (Air):</strong> Intellect, belief systems, mental conflict, communicative clarity.</li>
          <li><strong>Pentacles (Earth):</strong> Material reality, somatic body, financial grounding, tangible mastery.</li>
        </ul>
      </div>
      <div class="modal-cta-box">
        <p>Curious about exploring your personal card archetype?</p>
        <a href="#booking-sanctum" class="modal-action-link" onclick="closeAllModals()">Book an In-Depth Archetypal Reading →</a>
      </div>
    `
  },
  astrology: {
    title: 'Astrology and Celestial Studies',
    subtitle: 'The Cosmic Architecture of the Psyche',
    content: `
      <p class="modal-lead">Astrology reveals the celestial coordinates under which your conscious perspective was encoded.</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">The Cosmic Triad</h4>
        <p><strong>The Sun:</strong> Your core conscious essence, vitality, and heroic journey of individuation.<br>
        <strong>The Moon:</strong> Your nocturnal emotional landscape, reactive patterns, and childhood instinct.<br>
        <strong>The Rising (Ascendant):</strong> The lens through which you meet the world and your external persona.</p>
      </div>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">Planetary Transits & Psychological Timing</h4>
        <p>Understanding Saturn returns, Mercury retrograde reflection periods, and lunar tides enables you to co-create with cosmic timing rather than feeling at the mercy of chaotic circumstance.</p>
      </div>
      <div class="modal-cta-box">
        <a href="#booking-sanctum" class="modal-action-link" onclick="closeAllModals()">Request an Astrological Blueprint →</a>
      </div>
    `
  },
  psyche: {
    title: 'The Human Psyche',
    subtitle: 'Jungian Analytical Psychology & Symbolic Integration',
    content: `
      <p class="modal-lead">"Until you make the unconscious conscious, it will direct your life and you will call it fate." — Carl Gustav Jung</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">The Core Pillars of Our Work</h4>
        <ul>
          <li><strong>The Shadow:</strong> Integrating the repressed, hidden, and unexpressed gold of the subconscious mind.</li>
          <li><strong>Synchronicity:</strong> Meaningful coincidences that occur during tarot readings, reflecting the acausal connection between inner psyche and outer events.</li>
          <li><strong>The Collective Unconscious:</strong> Ancient symbols and mythologies that resonate across all human cultures and emerge in our card spreads.</li>
        </ul>
      </div>
    `
  },
  spreads: {
    title: 'Tarot Spreads and Interpretations',
    subtitle: 'Custom Geometries for Subconscious Inquiries',
    content: `
      <p class="modal-lead">Every tarot spread is a sacred mandala designed to illuminate different corridors of inquiry.</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">Featured Spreads by Smayra</h4>
        <ul>
          <li><strong>The Unconscious Blueprint Spread:</strong> As developed for university sessions, diagnosing hidden subconscious scripts driving current relational dynamics.</li>
          <li><strong>The 3-Card Temporal Mirror:</strong> Root Cause (Past), Present Dynamic (Conscious Energy), Emerging Trajectory (Subconscious Direction).</li>
          <li><strong>The Celtic Cross:</strong> A comprehensive 10-card multidimensional diagnostic of situation, challenges, subconscious roots, advice, and outcome.</li>
        </ul>
      </div>
    `
  },
  readings: {
    title: 'Private Readings & Consultations',
    subtitle: 'One-on-One Personalized Sanctuary Sessions',
    content: `
      <p class="modal-lead">Every private reading is conducted with complete confidentiality, compassion, and psychological depth.</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">Session Formats</h4>
        <p>We offer both online video sessions and in-person sanctuary readings (including exclusive campus sessions). Sessions include pre-cleansing with singing bowl, crystal focus, card spread exploration, and audio recording or detailed takeaway summary.</p>
      </div>
      <div class="modal-cta-box">
        <p>Direct Orders & Bookings:</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
          <a href="mailto:samayraasipaya@gmail.com?subject=Order%20Private%20Tarot%20Reading%20with%20Smayra&body=Hello%20Smayra,%0A%0AI%20would%20like%20to%20order%20a%20private%20reading%20session.%0A%0AName:%20%0APreferred%20Date%20/%20Time:%20%0AQuestions:%20" class="modal-action-link">Order via Email (samayraasipaya@gmail.com) →</a>
          <a href="https://wa.me/?text=Hello%20Smayra,%20I%20would%20love%20to%20book%20a%20private%20tarot%20reading%20session%20with%20you." target="_blank" class="modal-action-link" style="background: #25d366; color: #03070e;">WhatsApp →</a>
        </div>
      </div>
    `
  },
  year: {
    title: 'Your Year, Unfolded',
    subtitle: '12-Month Celestial Forecast & Solar Return',
    content: `
      <p class="modal-lead">Step into the upcoming year with strategic clarity, celestial foresight, and aligned intentionality.</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">What the Year-Ahead Reading Covers</h4>
        <ul>
          <li>Your overarching Archetype of the Year (calculated through your numerological & astrological birth card).</li>
          <li>Month-by-month card draws identifying key themes, challenges, and opportunities.</li>
          <li>Key cosmic transition dates, eclipses, and lunar windows for personal milestone planning.</li>
        </ul>
      </div>
    `
  },
  experiences: {
    title: 'My Work and Experiences',
    subtitle: 'Real World Readings, Campus Stalls & Community Connection',
    content: `
      <p class="modal-lead">Taking tarot beyond ivory towers into real-world student and community spaces.</p>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">The University Reading Stall</h4>
        <p>Smayra founded the acclaimed reading stall on campus at Chandigarh University featuring banners like <em>"The Conscious Blueprint Testing"</em> and <em>"Help! Kindly Make My Sad Friend Laugh!!"</em>, touching hundreds of students facing career anxiety, relationship decisions, and self-doubt.</p>
      </div>
      <div class="modal-section-block">
        <h4 class="modal-block-heading">Client Real Results</h4>
        <p>Clients consistently report tangible breakthroughs: seeing their life with unified clarity instead of fragmented confusion, and finding actionable confidence.</p>
      </div>
    `
  }
};

function initStoryAndDestinationModals() {
  const modalBackdrop = document.getElementById('details-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');

  if (!modalBackdrop) return;

  window.closeAllModals = function () {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  // "Discover My Story" Trigger
  const discoverStoryBtn = document.querySelector('.discover-story-btn');
  if (discoverStoryBtn) {
    discoverStoryBtn.addEventListener('click', () => {
      if (modalTitle) modalTitle.textContent = 'Discover My Story — Smayra';
      if (modalSubtitle) modalSubtitle.textContent = 'Student of the Psyche, Explorer of Symbols';
      if (modalBody) {
        modalBody.innerHTML = `
          <p class="modal-lead">"My work is not about foretelling a rigid fate; it is about awakening the inner cartographer inside of you."</p>
          <div class="modal-section-block">
            <h4 class="modal-block-heading">The Journey of Smayra</h4>
            <p>I began reading cards not as a parlor trick or superstition, but as an avid student fascinated by how human beings process pain, love, destiny, and decision-making. Studying psychology alongside traditional Hermetic symbolism, I realized the cards are an external mirror reflecting what the conscious ego often denies.</p>
          </div>
          <div class="modal-section-block">
            <h4 class="modal-block-heading">The Campus Stalls & The Human Connection</h4>
            <p>At Chandigarh University, I set up interactive stalls under banners like <em>'The Unconscious Blueprint'</em>. Students and seekers from all walks of life came sat at my table—shuffling cards amidst singing bowls and incense, seeking answers to their heartbreaks, ambitions, and fears. Witnessing their faces light up with clarity proved to me that when tarot is approached with psychological integrity, it transforms lives.</p>
          </div>
          <div class="modal-section-block">
            <h4 class="modal-block-heading">My Philosophy</h4>
            <p>You are never passive in your life story. The cards reveal the current energetic currents and subconscious tendencies; your conscious will and informed decisions determine where you steer your ship.</p>
          </div>
          <div class="modal-cta-box">
            <p>Follow my daily reflections, card wisdom, and updates:</p>
            <a href="https://instagram.com/smayra.sipayaa" target="_blank" class="modal-action-link">Connect with me on Instagram @smayra.sipayaa →</a>
          </div>
        `;
      }
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Destination Cards Click Handlers
  const destinationCards = document.querySelectorAll('[data-destination-key]');
  destinationCards.forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-destination-key');
      const data = DESTINATIONS_DATA[key];
      if (!data) return;

      if (modalTitle) modalTitle.textContent = data.title;
      if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
      if (modalBody) modalBody.innerHTML = data.content;

      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', window.closeAllModals);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) window.closeAllModals();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      window.closeAllModals();
    }
  });
}

/* ==========================================================================
   8. AMBIENT CELESTIAL AUDIO (SYNTHESIZED 432Hz HARMONIC CHORD)
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

    // Warm, meditative frequencies around 432Hz (432Hz, 216Hz, 648Hz, 540Hz)
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
    if (!audioCtx) {
      createCelestialPad();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

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
