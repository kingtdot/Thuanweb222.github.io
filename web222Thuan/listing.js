let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function validateForm() {
  // Get form fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const postalCode = document.getElementById("postalCode").value;
  const province = document.getElementById("province").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const email = document.getElementById("email").value;

  // Regular expressions for validation
  const postalCodeRegex = /[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]/;
  const provinceRegex = /^(QC|ON|MN|SK|AB|BC)$/;
  const ageRegex = /^[1-9][0-9]?$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.\d)(?=.[A-Z]).{6,}$/;

  // Validate fields
  if (
    firstName === "" ||
    lastName === "" ||
    address === "" ||
    city === "" ||
    postalCode === "" ||
    province === "" ||
    age === "" ||
    password === "" ||
    confirmPassword === "" ||
    email === ""
  ) {
    alert("All fields are mandatory and cannot be left blank.");
    return false;
  }

  if (!postalCode.match(postalCodeRegex)) {
    alert("Postal code must be in the format 'A0A0A0'.");
    return false;
  }

  if (!province.match(provinceRegex)) {
    alert("Province must be one of QC, ON, MN, SK, AB, BC.");
    return false;
  }

  if (!age.match(ageRegex) || parseInt(age) < 18) {
    alert("Age must be at least 18 years old.");
    return false;
  }

  if (!email.match(emailRegex)) {
    alert("Invalid email format. Please enter a valid email address.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please enter the same password.");
    return false;
  }

  if (!password.match(passwordRegex)) {
    alert(
      "Password must have at least 6 characters and contain at least one digit and one uppercase character."
    );
    return false;
  }

  // If all validations pass, show the confirmation message
  alert("Thanks for registering with our website. Your customer record was created successfully.");
  return true;
}

// Attach the validateForm function to the form's submit event
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  validateForm(); // Call the validateForm function
});