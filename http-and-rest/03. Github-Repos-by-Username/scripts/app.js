function loadRepos() {
  const username = document.querySelector("#username").value;
  const reposContainer = document.querySelector("#repos");
  reposContainer.textContent = "";

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((result) => result.text())
    .then((text) => visualizeRepos(text));

  function visualizeRepos(repos) {
    for (const repo of JSON.parse(repos)) {
      const currentListItem = document.createElement("li");
      const currentAnchor = document.createElement("a");
      currentAnchor.textContent = repo.full_name;
      currentAnchor.href = repo.html_url;
      currentListItem.appendChild(currentAnchor);
      reposContainer.appendChild(currentListItem);
    }
  }
}
