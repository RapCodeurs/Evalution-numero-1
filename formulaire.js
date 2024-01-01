const btn = document.querySelector("button");
const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");

function change() {
  const emailValue = email.value.trim();
  const paswordValue = password.value.trim();

  if (emailValue === "" || paswordValue === "") {
    alert("Veuillez saisir vos identifiants !");
  } else {
    window.open("webSite.html");
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  change();
});
