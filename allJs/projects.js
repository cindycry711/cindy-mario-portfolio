//OVERWRITE volume settings in constant_javascript.js (softer music)
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bg-music');
  const musicToggle = document.getElementById('music-toggle');

  // Ensure volume is set
  if (bgMusic) {
    bgMusic.volume = 0.4;
	
  // Optional: play music after user clicks sound block
    musicToggle.addEventListener('click', (e) => {
      e.preventDefault();

      if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.classList.add('playing');
      } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
      }
    });
  }
});
  
//DATA-TEXT!! (for both heading and paragraph)
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.video-links a');
  const heading = document.getElementById('dynamicHeading');
  const description = document.getElementById('dynamicDescription');

  const defaultHeading = "Hover over the characters to view details!";
  const defaultDescription = "";

  const detailsMap = {
	"StayInn Hotel Booking Website": "StayInn is a website created as a group assignment in the subject Web Fundamentals as well! A functional and interactive hotel booking website featuring room listings, date pickers, and user account system.  StayInn is a hotel and homestay booking website, where users can use to book for their vacation and holiday inns in a convenient way. This video is a demo on how to use the website! The site's features was created using HTML, CSS, and JavaScript.",	
	
"Animal Shelter Database": "Paw's Haven is an animal shelter that required a database for organising its data! This database was created using sql programming language from the subject Database Fundamentals! It keeps track of all the animals, their adopters, staff like caretakers and receptionists, and even adoption records. We made sure the system could handle real-life situations. It’s designed to make animal tracking, rehoming, and shelter coordination smooth and stress-free!",
"Beauty Products Inventory System": "This Inventory System was an assignment from the subject Programming Principles! It was developed using Python for beauty products — skincare, haircare, and makeup. It allows the beauty store employees to add new products and suppliers, place restock orders, view inventory, and generate low-stock or supplier-specific reports. This inventory management system is filled with input validations, backed by error prompts, ensuring a smooth user experience!",  };

  items.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const headingText = item.getAttribute('data-text');
      const detailText = detailsMap[headingText] || "";

      heading.classList.add('fade-out');
      description.classList.add('fade-out');

      setTimeout(() => {
        heading.textContent = headingText;
        description.textContent = detailText;

        heading.classList.remove('fade-out');
        description.classList.remove('fade-out');
      }, 250);
    });
  });

  window.addEventListener('load', () => {
    heading.textContent = defaultHeading;
    description.textContent = defaultDescription;
  });
});
