const form = document.marioForm;

function gooPest(pest1) {
  return pest1 * 5;
}

function bobPest(pest2) {
  return pest2 * 7;
}
function cheePest(pest3) {
  return pest3 * 11;
}

function sum(gooPest, bobPest, cheePest) {
  return gooPest + bobPest + cheePest;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const gooPest = form.gooPest.value;
  const bobPest = form.bobPest.value;
  const cheePest = form.cheePest.value;
  //   const total = sum(gooPest, bobPest, cheePest);
  form.gooPest.value = "";
  form.bobPest.value = "";
  form.cheePest.value = "";
});
