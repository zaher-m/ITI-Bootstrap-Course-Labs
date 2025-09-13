const spotlight = document.getElementById("spotlight");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  spotlight.style.background = `
    radial-gradient(
      circle 180px at ${x}px ${y}px,
      rgba(255,255,255,0) 0%,
      rgba(249,243,239,0.5) 100%
    )
  `;
});

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

document.getElementById("showRegister").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("d-none");
  registerForm.classList.remove("d-none");
});

document.getElementById("showLogin").addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration successful! Please login.");
  registerForm.reset();
  registerForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful!");
  loginForm.reset();
});
