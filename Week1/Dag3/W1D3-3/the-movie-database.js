const myFavMovie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};

const printMovie1 = function(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  const starsString = "Stars: ";
  for (let i = 0; i < movie.stars.length; i++) {
    starsString += movie.stars[i];
    if (i != movie.stars.length - 1) {
      starsString += ", ";
    }
  }
  console.log(starsString);
};
