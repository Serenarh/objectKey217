const book = {
  title: "Persuasion",
  author: "Jane Austen",
  authorAge: 40,
  characters: {
    mainFemale: "Anne Elliot",
    mainMale: "Captain Wentworth"
  }
};

console.log(book.characters.mainFemale);
console.log(book.authorAge);

const keyCharacters = "characters";
const key1 = "mainFemale";

console.log(book[keyCharacters]);
console.log(book.characters[key1]);

if (book.author == "Charlotte Bronte") {
  console.log("Your author is Charlotte Bronte");
} else if (book.author == "Mark Twain") {
  console.log("Your author is Mark Twain!");
} else {
  console.log("Your author is neither Charlotte Bronte nor Mark Twain!");
}
