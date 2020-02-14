function addMoviesToDom() {
  movies.forEach(movie => {
    let titleMovie = document.createElement("li");
    titleMovie.innerHTML = movie.Title;
    let listName = document.querySelector("#movieList");
    listName.appendChild(titleMovie);
  });
}

console.log(movieNames);
