const articles = document.querySelectorAll(".article-item");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

articles.forEach((article) => {
  appearOnScroll.observe(article);
});

/*
Reference
https://sahithyandev.github.io/sv443-joke-api-js-wrapper/
*/

console.log(Object.values(JokeAPI));

// JokeAPI.getJokes().then(r => console.log(r.body))
JokeAPI.getJokes({
  jokeType: "single",
})
  .then((r) => r.json())
  .then((data) => {
    updateUI(data);
  });

// To update the joke on the UI
function updateUI(jokeData) {
  const $ = (id) => document.getElementById(id);

  $("joke--text").innerHTML = jokeData.joke;
}
