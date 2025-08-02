//Toggle - Contact Reason: Other
function toggleOtherReason() {
  const reasonSelect = document.getElementById('reason');
  const otherBox = document.getElementById('otherReasonBox');

  if (reasonSelect.value === 'Other') {
    otherBox.style.display = 'block';
  } else {
    otherBox.style.display = 'none';
  }
}

//FORM VALIDATION JAVASCRIPT
function toggleOtherReason() {
  const reason = document.getElementById("reason").value;
  const otherBox = document.getElementById("otherReasonBox");
  otherBox.style.display = (reason === "Other") ? "block" : "none";
}

function validateForm(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const reason = document.getElementById("reason").value;
  const otherReason = document.getElementById("otherReason").value.trim();
  const enquires = document.getElementById("enquires").value.trim();

  // Check 'Other' reason
  if (reason === "Other" && otherReason === "") {
    alert("Please specify your reason in the 'Other' field.");
    document.getElementById("otherReason").focus();
    return false;
  }

  // **Using HTML5 built-in validation
  const form = document.getElementById("contactForm");
  if (!form.checkValidity()) {
    alert("Please fill in all required fields correctly.");
    return false;
  }

  alert("Enquiry submitted, thank you!");

  const byeSound = document.getElementById('mario-bye');
  if (byeSound) {
    byeSound.volume = 0.8;
    byeSound.play();
  }

  form.reset();
  document.getElementById("otherReasonBox").style.display = "none";
  return false;
}


//Forms Submission
function showForm() {
  const audio = document.getElementById('mario-intro');
  audio.volume = 0.8;
  audio.play();

  const form = document.getElementById('contactFormContainer');
  form.classList.add('show');
}

function handleSubmit(e) {
  e.preventDefault();
  alert("Enquiry submitted, thank you!");

  const byeSound = document.getElementById('mario-bye');
  byeSound.volume = 0.8;
  byeSound.play();

  // Clear form when submitted
  e.target.reset();
  return false; 
}

//DISABLE SCROLLING DURING TRANSITION
  document.addEventListener("DOMContentLoaded", () => {
    // Disable scroll
    document.body.classList.add("disable-scroll");

    // Re-enable scrolling after transition
    setTimeout(() => {
      document.body.classList.remove("disable-scroll");
    }, 1500); // 1500ms = 1s duration of the beginning transition ONLY
  });

