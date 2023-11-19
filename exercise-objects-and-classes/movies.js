function movies(input) {
  const allMovies = [];

  function findMovie(movieName) {
    return allMovies.find((movie) => movie.name === movieName);
  }

  input.forEach((movieAction) => {
    if (movieAction.includes("addMovie")) {
      const [_, movieName] = movieAction.split("addMovie ");

      allMovies.push({ name: movieName });
    } else if (movieAction.includes("directedBy")) {
      const [movieName, director] = movieAction.split(" directedBy ");
      const movie = findMovie(movieName);

      if (movie) {
        movie["director"] = director;
      }
    } else if (movieAction.includes("onDate")) {
      const [movieName, date] = movieAction.split(" onDate ");
      const movie = findMovie(movieName);

      if (movie) {
        movie["date"] = date;
      }
    }
  });

  const validMovies = allMovies.filter(
    (movie) => Object.entries(movie).length >= 3,
  );

  validMovies.map((movie) => console.log(JSON.stringify(movie)));
}
