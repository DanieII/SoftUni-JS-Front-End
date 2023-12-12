const logoutBtn = document.querySelector("#logout");
const guestButtons = document.querySelector("#guest");
const userButtons = document.querySelector("#user");

if (localStorage.getItem("userData")) {
  guestButtons.style.display = "none";
  userButtons.style.display = "inline-block";
  logoutBtn.style.display = "inline-block";
} else {
  guestButtons.style.display = "inline-block";
  userButtons.style.display = "none";
  logoutBtn.style.display = "none";
}

const loginBtn = document.querySelector("#login button");

loginBtn.addEventListener("click", handleLoginBtnClick);

async function handleLoginBtnClick(e) {
  e.preventDefault();

  const [email, password] = Array.from(
    document.querySelectorAll("#login input"),
  ).map((i) => i.value);

  const response = await fetch("http://localhost:3030/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
    localStorage.setItem(
      "userData",
      JSON.stringify({ token: result.accessToken, id: result._id }),
    );
    window.location.href = "index.html";
  }
}
