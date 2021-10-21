const form = document.marioForm;

function gooPest(pest1) {
  return pest1 * 5;
}
function booPest(pest2) {
  return pest2 * 7;
}
function cheePest(pest3) {
  return pest3 * 11;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const gooPest = form.gooPest.value;
  const booPest = form.booPest.value;
  const cheePest = form.cheePest.value;
});
