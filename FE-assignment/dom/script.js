const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");

loginBtn.addEventListener("click", () => {
  signupContainer.classList.add("d-none");
  loginContainer.classList.remove("d-none");
});

signupBtn.addEventListener("click", () => {
  loginContainer.classList.add("d-none");
  signupContainer.classList.remove("d-none");
});
