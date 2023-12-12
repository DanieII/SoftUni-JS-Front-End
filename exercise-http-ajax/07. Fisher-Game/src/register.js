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

const registerBtn = document.querySelector("#register button");

registerBtn.addEventListener("click", handleRegisterBtnClick);

async function handleRegisterBtnClick(e) {
  e.preventDefault();

  const [email, password, repeat] = Array.from(
    document.querySelectorAll("#register input"),
  ).map((i) => i.value);

  if (password === repeat) {
    const response = await fetch("http://localhost:3030/users/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      localStorage.setItem(
        "userData",
        JSON.stringify({ token: result.accessToken, id: result._id }),
      );
      window.location.href = "index.html";
    }
  }
}
