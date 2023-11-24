function comments(input) {
  const users = [];
  const articles = [];

  for (const action of input) {
    if (action.includes("user")) {
      const user = action.split("user ")[1];
      users.push(user);
    } else if (action.includes("article")) {
      const articleName = action.split("article ")[1];
      articles.push({ articleName, comments: [] });
    } else if (action.includes("posts")) {
      const [userAndArticle, commentInfo] = action.split(": ");
      const [user, articleName] = userAndArticle.split(" posts on ");
      const [commentTitle, commentContent] = commentInfo.split(", ");

      if (
        users.includes(user) &&
        articles.map((article) => article.articleName).includes(articleName)
      ) {
        for (const article of articles) {
          if (article.articleName === articleName) {
            article.comments.push({ user, commentTitle, commentContent });
          }
        }
      }
    }
  }

  const sortedArticles = articles.sort(
    (a, b) => b.comments.length - a.comments.length,
  );

  for (const article of sortedArticles) {
    console.log(`Comments on ${article.articleName}`);

    const sortedComments = article.comments.sort((a, b) =>
      a.user.localeCompare(b.user),
    );

    for (const comment of sortedComments) {
      console.log(
        `--- From user ${comment.user}: ${comment.commentTitle} - ${comment.commentContent}`,
      );
    }
  }
}
