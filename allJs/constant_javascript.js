document.addEventListener('DOMContentLoaded', () => {
  // PIPE BUTTON
  const pipeSound = document.getElementById('pipe-sound');
  const pipeButton = document.getElementById('pipe-button');

  if (pipeSound && pipeButton) {
    pipeSound.volume = 0.4;

    pipeButton.addEventListener('mouseenter', () => {
      pipeSound.currentTime = 0;
      pipeSound.play();
    });

    pipeButton.addEventListener('click', (e) => {
      e.preventDefault();
      pipeSound.currentTime = 0;
      pipeSound.play();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // DICE BUTTON
  const diceAudio = document.getElementById('sound-effect');
  const diceImage = document.querySelector('.coin-button img');

  if (diceAudio && diceImage) {
    diceAudio.volume = 0.4;

    diceImage.addEventListener('mouseenter', () => {
      diceAudio.currentTime = 0;
      diceAudio.play();
    });

    diceImage.addEventListener('mouseleave', () => {
      diceAudio.pause();
    });
  }

  // BACKGROUND MUSIC
  const bgMusic = document.getElementById('bg-music');
  const musicButton = document.getElementById('music-toggle');
  const musicIcon = musicButton?.querySelector('img');

  if (bgMusic && musicButton && musicIcon) {
    bgMusic.volume = 0.2;

    document.addEventListener('click', () => {
      if (bgMusic.paused) bgMusic.play();
    }, { once: true });

    musicButton.addEventListener('click', (event) => {
      event.preventDefault();
      bgMusic.muted = !bgMusic.muted;
      musicIcon.src = bgMusic.muted
        ? 'allImages/constantlayoutImages/no music.png'
        : 'allImages/constantlayoutImages/mario sound block.webp';
    });
  }

  // BLOCK HIT SOUND
  const blockHitSound = document.getElementById('block-sfx');
  if (blockHitSound) {
    blockHitSound.volume = 0.3;
  }
});

// SCROLL DETECTION PIPE APPEARS
window.addEventListener('scroll', () => {
  const pipeButton = document.getElementById('pipe-button');
  if (!pipeButton) return;

  if (window.scrollY > 10) {
    pipeButton.classList.add('visible');
  } else {
    pipeButton.classList.remove('visible');
  }
});
