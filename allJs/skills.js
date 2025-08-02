// Set audio manually (override constant_javascript of setting bg-music 0.2)
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  if (bgMusic) {
    bgMusic.volume = 0.3;
  }
  
  
  

  // ZOOM IN FUNCTIONALITY
  const zoomables = document.querySelectorAll('.zoomable');
  const overlay = document.getElementById('zoom-overlay');
  const zoomImageEl = document.getElementById('zoom-image');

  function zoomImage(src) {
    zoomImageEl.src = src;
    overlay.classList.add('show');
    document.body.classList.add('no-scroll');
  }

  zoomables.forEach(img => {
    img.addEventListener('click', () => {
      zoomImage(img.src);
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    zoomImageEl.src = "";
    document.body.classList.remove('no-scroll');
  });
});

// BLOCK HITTING SOUND
const hitCounter = new Map();

function hitBlock(brickImg, popupId) {
  const currentHits = hitCounter.get(brickImg) || 0;
  const newHits = currentHits + 1;
  hitCounter.set(brickImg, newHits);

  playSound(); // ✅ play the shared sound every time

  if (newHits === 1) {
    brickImg.src = "allImages/skillsImages/brick_1.png";
    animateShake(brickImg);
  } else if (newHits === 2) {
    brickImg.src = "allImages/skillsImages/brick_2.png";
    animateShake(brickImg);
  } else if (newHits === 3) {
    brickImg.src = "allImages/skillsImages/item bag.png";
    brickImg.classList.add("item-bag"); // GLOW EFFECT
    brickImg.removeAttribute("onclick"); 

    brickImg.addEventListener("click", () => {
      const popup = document.getElementById(popupId);
      popup.style.display = "block";

      // Play 1-Up sound
      const oneUp = document.getElementById("oneup-sfx");
      if (oneUp) {
        oneUp.volume = 0.2;
        oneUp.currentTime = 0;
        oneUp.play();
      }
    });
  }
}

function playSound() {
  const sound = document.getElementById("block-sfx");
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function animateShake(el) {
  el.classList.add("shake");
  setTimeout(() => el.classList.remove("shake"), 200);
}

