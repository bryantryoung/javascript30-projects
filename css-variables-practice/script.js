const r = document.querySelector(":root");
const inputs = document.querySelectorAll("input");

function updateVar() {
  const suffix = this.dataset.sizing || "";
  r.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach((input) => {
  input.addEventListener("change", updateVar);
});
inputs.forEach((input) => {
  input.addEventListener("mouseover", updateVar);
});
