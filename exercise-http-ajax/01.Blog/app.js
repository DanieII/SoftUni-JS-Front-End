const loadPostsBtn = document.querySelector("#btnLoadPosts");
const viewPostBtn = document.querySelector("#btnViewPost");
const postsSelect = document.querySelector("#posts");
const postTitle = document.querySelector("#post-title");
const postBody = document.querySelector("#post-body");
const postComments = document.querySelector("#post-comments");

function attachEvents() {
  loadPostsBtn.addEventListener("click", handleLoadPostsBtnClick);
  viewPostBtn.addEventListener("click", handleViewPostBtnClick);
}

async function handleLoadPostsBtnClick() {
  postsSelect.innerHTML = "";
  const response = await fetch("http://localhost:3030/jsonstore/blog/posts");
  const result = await response.json();

  for (const [objectKey, postInfo] of Object.entries(result)) {
    const currentOption = document.createElement("option");
    currentOption.value = objectKey;
    currentOption.textContent = postInfo.title;
    postsSelect.appendChild(currentOption);
  }
}

async function handleViewPostBtnClick() {
  const currentPostId = postsSelect.value;
  postComments.innerHTML = "";

  let posts = fetch("http://localhost:3030/jsonstore/blog/posts");
  let comments = fetch("http://localhost:3030/jsonstore/blog/comments");
  [posts, comments] = await Promise.all([posts, comments]).then((result) =>
    Promise.all(result.map((result) => result.json())),
  );

  for (const [objectKey, postInfo] of Object.entries(posts)) {
    if (objectKey === currentPostId) {
      postTitle.textContent = postInfo.title;
      postBody.textContent = postInfo.body;
    }
  }

  for (const commentInfo of Object.values(comments)) {
    if (commentInfo.postId === currentPostId) {
      const currentComment = document.createElement("li");
      currentComment.textContent = commentInfo.text;
      postComments.appendChild(currentComment);
      break;
    }
  }
}

attachEvents();
