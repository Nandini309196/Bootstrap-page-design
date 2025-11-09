document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-primary");
  if (btn) {
    btn.addEventListener("click", () => console.log("Button clicked!"));
  }
});
