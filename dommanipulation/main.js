// const changeText = () => {
//   const element = document.querySelector("p");
//   element.textContent = "Change";
//   element.style.color = "red";
//   element.style.fontSize = "200px";
// };
// // changeText();
// const reset = () => {
//   const resetBtn = document.querySelector("p");
//   resetBtn.textContent = "Old text";
//   resetBtn.style.color = "blue";
//   // resetBtn.style.fontSize = "50px";
// };
// const changeFormat = () => {
//   const changeFormatBtn = document.getElementById("changeIt");
//   changeFormatBtn.innerHTML += "<i>This is changed italic format</i>";
// };
function btn(name) {
  const button = document.querySelectorAll(".test");
  button.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(name).classList.add("active");
  // return true;
}
