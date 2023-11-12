const btnTheme = document.getElementById("btn-theme");
const body = document.querySelector("body");
const textbtn = document.getElementById("textbtn");
const keur = document.getElementById("keur");
const patisserie = document.getElementById("patisserie");
const modal = document.getElementById("modal");

let themeSombre = localStorage.getItem("dark-mode");

const themeSombreActive = () => {
  body.classList.add("dark-mode-theme");
  keur.classList.add("dark-mode-theme-card");
  modal.classList.add("dark-mode-theme-card-modal");

  patisserie.classList.add("dark-mode-theme-card");
  btnTheme.classList.add("dark-mode");
  card.classList.add("dark-mode-theme");
  textbtn.innerHTML = "SOMBRE";
  localStorage.setItem("dark-mode", "active");
};

const themeSombreDesactive = () => {
  body.classList.remove("dark-mode-theme");
  keur.classList.remove("dark-mode-theme-card");
  modal.classList.remove("dark-mode-theme-card-modal");

  patisserie.classList.remove("dark-mode-theme-card");
  btnTheme.classList.remove("dark-mode");
  card.classList.remove("dark-mode-theme");
  textbtn.innerHTML = "CLAIR";
  localStorage.setItem("dark-mode", "desactive");
};

if (themeSombre === "active") {
  themeSombreActive();
}

btnTheme.onclick = function () {
  themeSombre = localStorage.getItem("dark-mode");
  if (themeSombre === "desactive") {
    themeSombreActive();
  } else {
    themeSombreDesactive();
  }
};
//commentaires
const form = document.getElementById("commentaires");
const result = document.getElementById("resultat");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const post = document.getElementById("post");
  let enfant = document.createElement("div");
  enfant.innerHTML = post.value;
  result.appendChild(enfant);
  post.value = "";
});
