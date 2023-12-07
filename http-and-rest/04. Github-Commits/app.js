function loadCommits() {
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;
  const commitContainer = document.querySelector("#commits");
  commitContainer.textContent = "";

  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((response) => response.text())
    .then((text) => displayCommits(text));

  function displayCommits(commits) {
    commits = JSON.parse(commits);

    if (commits.message === "Not Found") {
      const currentListItem = document.createElement("li");
      currentListItem.textContent = "Error: 404 (Not Found)";
      commitContainer.appendChild(currentListItem);
      return;
    }

    for (const commit of commits) {
      const currentListItem = document.createElement("li");
      currentListItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
      commitContainer.appendChild(currentListItem);
    }
  }
}
