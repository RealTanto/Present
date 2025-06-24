// ===== MAIN CONTROLLER =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles (ORIGINAL)
  particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      size: { value: 2 },
      color: { value: "#00ff00" },
      line_linked: {
        enable: true,
        color: "#00ff00",
        opacity: 0.3
      },
      move: { enable: true, speed: 1.5 }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "repulse" }
      }
    }
  });

  // DOM Elements (ORIGINAL)
  const envelopeScreen = document.getElementById('envelope-screen');
  const terminalScreen = document.getElementById('terminal-screen');
  const openBtn = document.getElementById('open-btn');
  const envelope = document.querySelector('.envelope');
  const messages = document.querySelectorAll('.terminal-line');
  const music = document.getElementById('bgMusic');

  // Open envelope handler (ORIGINAL ANIMATION - UNTOUCHED)
  openBtn.addEventListener('click', () => {
    music.play().catch(e => console.log("Audio blocked:", e));
    envelope.classList.add('open');
    
    setTimeout(() => {
      envelopeScreen.style.opacity = '0';
      setTimeout(() => {
        terminalScreen.classList.add('active-screen');
        startMessageSequence(); // Calls updated timing function
      }, 1000);
    }, 1200);
  });

  // ===== UPDATED MESSAGE SEQUENCE =====
  function startMessageSequence() {
    // Timing control - ONLY CHANGE THESE VALUES:
    const settings = {
      initialDelay: 1500,    // 1.5s before first message
      fadeDuration: 1500,    // 1.5s fade-in time per message
      betweenMessages: 2500, // 2.5s pause after each message
      finaleDelay: 10,      // 3s delay after last message
    };

    let delay = settings.initialDelay;

    messages.forEach((message, index) => {
      setTimeout(() => {
        message.classList.add('visible');
        
        // Last message handler with delayed image reveal
        if (index === messages.length - 1) {
          setTimeout(() => {
            const finale = document.getElementById('photo-finale');
            finale.classList.remove('hidden'); // make it visible in layout
            setTimeout(() => {
              finale.classList.add('show'); // trigger the fade-in
            }, 100);
          }, settings.finaleDelay);
        }
      }, delay);
      
      delay += settings.fadeDuration + settings.betweenMessages;
    });
  }
});
