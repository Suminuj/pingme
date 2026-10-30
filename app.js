const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const nameInput = document.getElementById("displayName");
const nameLabel = document.getElementById("nameLabel");
const passwordInput = document.getElementById("password");
const submitText = document.getElementById("submitText");
const formMessage = document.getElementById("formMessage");
const authForm = document.getElementById("authForm");

let mode = "login";

function setMode(nextMode) {
  mode = nextMode;
  const signingUp = mode === "signup";
  loginTab.classList.toggle("active", !signingUp);
  signupTab.classList.toggle("active", signingUp);
  loginTab.setAttribute("aria-selected", String(!signingUp));
  signupTab.setAttribute("aria-selected", String(signingUp));
  nameInput.classList.toggle("hidden", !signingUp);
  nameLabel.classList.toggle("hidden", !signingUp);
  nameInput.required = signingUp;
  passwordInput.autocomplete = signingUp ? "new-password" : "current-password";
  submitText.textContent = signingUp ? "Create account" : "Log in";
  formMessage.textContent = signingUp
    ? "Account creation will be connected to secure authentication next."
    : "Secure login will be connected in our next step.";
}

loginTab.addEventListener("click", () => setMode("login"));
signupTab.addEventListener("click", () => setMode("signup"));

document.getElementById("showPassword").addEventListener("click", (event) => {
  const showing = passwordInput.type === "text";
  passwordInput.type = showing ? "password" : "text";
  event.currentTarget.textContent = showing ? "Show" : "Hide";
  event.currentTarget.setAttribute("aria-label", showing ? "Show password" : "Hide password");
});

document.getElementById("themeToggle").addEventListener("click", (event) => {
  document.body.classList.toggle("light");
  event.currentTarget.textContent = document.body.classList.contains("light") ? "☀" : "☾";
  event.currentTarget.setAttribute("aria-label", document.body.classList.contains("light") ? "Switch to dark theme" : "Switch to light theme");
});

authForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "This is the visual starter only. We will connect Firebase authentication before enabling real accounts.";
});
