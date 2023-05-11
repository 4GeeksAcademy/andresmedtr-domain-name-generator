console.log("Any string");

// string methods

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "lastofus"];
let ext = [".net", ".us", ".io", ".etc", ".com"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        if (noun[k].endsWith("us")) {8
          let newNoun = noun[k].replace("us", "");
          console.log(pronoun[i] + adj[j] + newNoun + ext[1]);
        } else {
          console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
        }
      }
    }
  }
}
