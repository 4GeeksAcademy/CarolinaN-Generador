
let button = document.getElementById("generateBtn");
let list = document.getElementById("domainList");

button.addEventListener("click", () => {
  let pronouns = ["my", "your", "our"];
  let adjectives = ["cool", "fast", "big"];
  let nouns = ["dog", "code", "world"];
  let extensions = [".com", ".net", ".org"];

  list.innerHTML = ""; // Clear previous list

  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let ext of extensions) {
          let domain = `${pronoun}${adjective}${noun}${ext}`;
          let li = document.createElement("li");
          li.textContent = domain;
          list.appendChild(li);
        }
      }
    }
  }
});