// ===== MAIN CONTROLLER =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles
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

  // DOM Elements
  const envelopeScreen = document.getElementById('envelope-screen');
  const terminalScreen = document.getElementById('terminal-screen');
  const openBtn = document.getElementById('open-btn');
  const envelope = document.querySelector('.envelope');
  const messages = document.querySelectorAll('.terminal-line');
  const music = document.getElementById('bgMusic');

  // Open envelope handler (ORIGINAL ANIMATION)
  openBtn.addEventListener('click', () => {
    music.play().catch(e => console.log("Audio blocked:", e));
    envelope.classList.add('open');
    
    setTimeout(() => {
      envelopeScreen.style.opacity = '0';
      setTimeout(() => {
        terminalScreen.classList.add('active-screen');
        startMessageSequence();
      }, 1000);
    }, 1200);
  });

  // Message sequence animation
  function startMessageSequence() {
    let delay = 1000;
    messages.forEach((message, index) => {
      setTimeout(() => {
        message.classList.add('visible');
        if (index === messages.length - 1) {
          setTimeout(() => {
            document.getElementById('photo-finale').classList.remove('hidden');
          }, 2000);
        }
      }, delay);
      delay += 2000; // 2s between messages
    });
  }
});
