const tellFortune = function(jobTitle, geoLocation, partner, numKids) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    " and married to " +
    partner +
    " " +
    " with " +
    numKids +
    " kids.";
  console.log(future);
};

tellFortune("Actor", "the USA", "Jennifer Lopez", 3);
tellFortune("Pop-star", "England", "Brad Pitt", 2);
tellFortune("homeless man", "the Netherlands", "Willem Alexander", 1);
