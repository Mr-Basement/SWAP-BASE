/**
 * SWAP-BASE Configuration File
 * Edit this file to customize your site - no coding knowledge needed!
 */

export const SWAP_CONFIG = {
  
  // ============================================================================
  // BRAND TEXT & MESSAGING
  // ============================================================================
  
  branding: {
    heroText: "SWAP-BASE",
    tagline: "STYLE WITH A PURPOSE // UNDERGROUND COLLECTIVE",
    welcomeMessage: "Welcome to the underground. You're not supposed to be here... but we're glad you found us.",
    aboutText: "SWAP x Heaven's Basement - Where fashion meets rebellion, and music ignites the soul."
  },

  // ============================================================================
  // COLORS (Hex format: 0xRRGGBB)
  // ============================================================================
  
  colors: {
    background: 0x0a0a0a,       // Very dark background
    primaryMetal: 0x1a1a1a,     // Dark metallic
    accentOrange: 0xff7326,     // Orange from your logos
    matrixGreen: 0x00ff41,      // Matrix green glow
    chrome: 0xe8e8f0,           // Chrome/silver
    fog: 0x111111,              // Fog color
    particleColor: 0x00ff41     // Particle effects color
  },

  // ============================================================================
  // PORTAL LINKS (Your Social Media & Platforms)
  // Update these URLs with your actual links
  // ============================================================================
  
  portals: [
    {
      name: "Instagram",
      url: "https://instagram.com/yourhandle",
      emoji: "📸",
      color: 0xff7326
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/...",
      emoji: "🎵",
      color: 0x1DB954
    },
    {
      name: "Tickets",
      url: "https://www.eventbrite.com/...",
      emoji: "🎫",
      color: 0xff7326
    },
    {
      name: "Merch Store",
      url: "https://shop.swap...",
      emoji: "👕",
      color: 0xffffff
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@...",
      emoji: "📺",
      color: 0xFF0000
    },
    {
      name: "Booking",
      url: "mailto:booking@swap.com",
      emoji: "📧",
      color: 0x00ff41
    }
  ],

  // ============================================================================
  // MUSIC TRACKS
  // Add your MP3 files to assets/music/ folder first
  // Then list them here
  // ============================================================================
  
  music: {
    enabled: true,
    autoplay: false,  // Set to true if you want music to start automatically
    tracks: [
      {
        title: "Live Set October 2024",
        artist: "Mr-Basement",
        file: "assets/music/track1.mp3",
        coverArt: "assets/images/cover1.jpg"
      },
      {
        title: "Heaven's Basement Mix",
        artist: "SWAP Collective",
        file: "assets/music/track2.mp3",
        coverArt: "assets/images/cover2.jpg"
      },
      {
        title: "Underground Sessions",
        artist: "Mr-Basement",
        file: "assets/music/track3.mp3",
        coverArt: "assets/images/cover3.jpg"
      }
    ]
  },

  // ============================================================================
  // LIVE PERFORMANCE INFO
  // ============================================================================
  
  livePerformance: {
    enabled: true,
    nextShowDate: "2025-10-31",  // Format: YYYY-MM-DD
    nextShowName: "SWAPTOBER 2025",
    nextShowVenue: "TBA",
    bookingEmail: "booking@swap.com",
    bookingText: "Book a performance"
  },

  // ============================================================================
  // LOGO ASSETS
  // Upload your PNG/JPG files to assets/logos/ first
  // Then reference them here
  // ============================================================================
  
  logos: {
    main: "assets/logos/swap_main.png",           // Main SWAP logo
    heavensBasement: "assets/logos/hb_logo.png",  // Heaven's Basement logo
    icon: "assets/logos/swap_icon.png",           // Small icon/symbol
    swaptober: "assets/logos/swaptober.png"       // SWAPTOBER text logo
  },

  // ============================================================================
  // VISUAL EFFECTS SETTINGS
  // ============================================================================
  
  effects: {
    matrixRain: true,           // Digital rain effect on entrance
    particles: true,            // Floating particle effects
    logoRotation: true,         // Auto-rotate logos
    musicVisualizer: true,      // Audio-reactive visuals
    cameraMovement: "smooth",   // "smooth" or "static"
    fogDensity: 0.003           // Higher = thicker fog (0.001 - 0.01)
  },

  // ============================================================================
  // MOBILE OPTIMIZATION
  // ============================================================================
  
  mobile: {
    reducedParticles: true,     // Use fewer particles on mobile for performance
    simplifiedEffects: true,    // Lighter effects on mobile
    touchSensitivity: 1.0       // Touch sensitivity (0.5 - 2.0)
  },

  // ============================================================================
  // COUNTDOWN TIMER
  // Set to null to disable, or provide a date
  // ============================================================================
  
  countdown: {
    enabled: true,
    targetDate: "2025-10-31T20:00:00",  // ISO format: YYYY-MM-DDTHH:MM:SS
    eventName: "SWAPTOBER 2025",
    label: "COUNTDOWN TO"
  }

};

// ============================================================================
// EXPORT (Don't change this)
// ============================================================================

export default SWAP_CONFIG;
