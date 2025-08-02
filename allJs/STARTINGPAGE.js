//1 SECOND LOADING-SCREEN
 window.addEventListener("load", function () {
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 1000); // 1 second
  });
  
  const items = Array.from(document.querySelectorAll(".item"));
	  const cols = 4;

	  function getClosestItem(element) {
		return element.closest(".item");
	  }

	  document.addEventListener("keydown", (e) => {
		const current = getClosestItem(document.activeElement);
		const index = items.indexOf(current);
		let newIndex = index;

		if (e.key === "ArrowRight") {
		  newIndex = (index + 1) % items.length;
		  e.preventDefault();
		}

		if (e.key === "ArrowLeft") {
		  newIndex = (index - 1 + items.length) % items.length;
		  e.preventDefault();
		}

		if (e.key === "ArrowDown") {
		  newIndex = (index + cols) % items.length;
		  e.preventDefault();
		}

		if (e.key === "ArrowUp") {
		  newIndex = (index - cols + items.length) % items.length;
		  e.preventDefault();
		}

		if (items[newIndex]) {
		  items[newIndex].focus();

		  // Changes the data-text (the h2 text at the brick blocks) to the next
		  const dynamicText = document.getElementById("dynamicText");
		  const newText = items[newIndex].dataset.text;
		  if (dynamicText && newText) {
			dynamicText.textContent = newText;
		  }
		}
	  });

  // Auto focus first block when page refresh AND shows the data-text automatically
  window.onload = () => {
    items[0].focus();

    // Default h2 text 
    const dynamicText = document.getElementById("dynamicText");
    const defaultText = items[0].dataset.text;
    if (dynamicText && defaultText) {
      dynamicText.textContent = defaultText;
    }
  };
  
  window.addEventListener('DOMContentLoaded', function () {
  const bgMusic = document.getElementById('bg-music');
  const musicButton = document.getElementById('music-toggle');
  const img = musicButton.querySelector('img');

    // Plays audio on first key press
  function startMusicOnce() {
    bgMusic.volume = 0.2;
    bgMusic.play().catch(() => {}); // In case of autoplay block
    document.removeEventListener('keydown', startMusicOnce);
  }

  document.addEventListener('keydown', startMusicOnce);


  
});
