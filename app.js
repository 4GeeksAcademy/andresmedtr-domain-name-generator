console.log("Any string");

// string methods

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "lastofus"];
let ext = [".net", ".us", ".io", ".etc", ".com"];

noun[2].replace("us");

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
            if (noun[k].endsWith("us")) {
            }
            console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
        }
    }
  }
}
