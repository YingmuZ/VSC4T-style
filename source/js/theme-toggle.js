document.addEventListener("DOMContentLoaded", () => {
  const mode = localStorage.getItem("theme-mode");
  if (mode === "light") {
    document.body.classList.add("light-mode");
  }

  const btn = document.getElementById("toggle-theme");
  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const current = document.body.classList.contains("light-mode")
        ? "light"
        : "dark";
      localStorage.setItem("theme-mode", current);
    });
  }
});
