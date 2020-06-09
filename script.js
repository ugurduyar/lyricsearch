const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search
async function searchSongs(term) {
  const res = await fetch(`https://api.lyrics.ovh/suggest/${term}`);
  const data = await res.json();
  console.log(data);
}

// Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const seachTerm = search.value.trim();

  if (!seachTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(seachTerm);
  }
});
