function changeValueFirstBtn() {
  document.getElementById("paragraph").innerText = "You clicked First button";
}
function changeValueSecondBtn() {
  document.getElementById("paragraph").innerText = "You clicked Second button";
}
function changeValueThirdBtn() {
  document.getElementById("paragraph").innerText = "You clicked Third button";
}

first.addEventListener("click", changeValueFirstBtn);
second.addEventListener("click", changeValueSecondBtn);
third.addEventListener("click", changeValueThirdBtn);
