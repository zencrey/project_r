document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("dark-mode-toggle");

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  console.log("Website loaded successfully!");
});
