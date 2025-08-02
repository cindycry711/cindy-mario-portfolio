document.addEventListener('DOMContentLoaded', () => {
  // ZOOM FUNCTIONALITY
  const zoomables = document.querySelectorAll('.zoomable');
  const overlay = document.getElementById('zoom-overlay');
  const zoomImage = document.getElementById('zoom-image');

  zoomables.forEach(img => {
    img.addEventListener('click', () => {
      zoomImage.src = img.src;
      overlay.classList.add('show');
      document.body.classList.add('no-scroll');
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    zoomImage.src = "";
    document.body.classList.remove('no-scroll');
  });

  // TYPEWRITER FUNCTIONALITY
  const typewriterElements = document.querySelectorAll(".typewriter-text");

  const resetBtn = document.getElementById("resetButton");
  let currentTypingEl = null;

  function showResetBtn() {
    resetBtn.classList.add("show");
    resetBtn.style.display = "block";
  }

  function hideResetBtn() {
    resetBtn.classList.remove("show");
    resetBtn.style.display = "none";
  }

  typewriterElements.forEach(el => {
    const fullText = el.textContent;
    el.setAttribute("data-fulltext", fullText);
    el.style.cursor = "pointer";
    el._typingInterval = null;

    el.addEventListener("click", () => {
      // Stop previous animation if another one is active
      if (currentTypingEl && currentTypingEl._typingInterval) {
        clearInterval(currentTypingEl._typingInterval);
        currentTypingEl.textContent = currentTypingEl.getAttribute("data-fulltext");
      }

      currentTypingEl = el;

      // Reset button
      el.parentElement.appendChild(resetBtn);
      showResetBtn();

      // Reset typing animation
      const text = el.getAttribute("data-fulltext");
      el.textContent = "";
      let i = 0;

      const interval = setInterval(() => {
        if (i < text.length) {
          el.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          el._typingInterval = null;
          hideResetBtn();
        }
      }, 50);

      el._typingInterval = interval;
    });
  });

  // RESET BUTTON
  resetBtn.addEventListener("click", () => {
    if (currentTypingEl) {
      clearInterval(currentTypingEl._typingInterval);
      currentTypingEl.textContent = currentTypingEl.getAttribute("data-fulltext");
      currentTypingEl._typingInterval = null;
    }
    hideResetBtn();
  });

});
