// Button click changes text and color
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
  colorBtn.textContent = "Clicked!";
  colorBtn.style.backgroundColor = "#4CAF50";
});

// Double-click easter egg
colorBtn.addEventListener('dblclick', () => {
  alert("Congratulations! You found the double-click secret!");
});

// Keypress detection
document.addEventListener('keypress', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Hover image gallery
function changeImage(img) {
  const main = document.getElementById('mainImage');
  main.src = img.src;
}

// Accordion
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isVisible = content.style.display === 'block';
    document.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
    content.style.display = isVisible ? 'none' : 'block';
  });
});

// Form Validation
const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

emailInput.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  emailFeedback.textContent = valid ? " Valid" : " Invalid email";
  emailFeedback.style.color = valid ? "green" : "red";
});

passwordInput.addEventListener('input', () => {
  const valid = passwordInput.value.length >= 8;
  passwordFeedback.textContent = valid ? " Strong password" : " Too short";
  passwordFeedback.style.color = valid ? "green" : "red";
});

form.addEventListener('submit', (e) => {
  if (!emailInput.checkValidity() || !passwordInput.checkValidity()) {
    e.preventDefault();
    alert(" Please fill the form correctly!");
  } else {
    alert(" Form submitted successfully!");
  }
});
