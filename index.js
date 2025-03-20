//1.Extract the last four characters from the string below;"extravaganza"

let string ="extravaganza";
let newString = string.slice("8",);

console.log(newString);

//2.Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick brown fox jumped over the lazy dog";
const index = 4;
const stringToInsert = "eat";

const newFood = food.slice(0, index) + stringToInsert + food.slice(index);

console.log(newFood);

//3.Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"

let story = "The quick brown fox jumps over the lazy dog";
let string1 = "the";
let string2 = "brown";
let storyLower = story.toLowerCase();

console.log(storyLower)

const count1 = storyLower.split(string1.toLowerCase()).length -1;
const count2 = storyLower.split(string2.toLowerCase()).length -1;

console.log(count1);
console.log(count2);

//4.Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"

const info = "The pupils are reading in the library";
const info2 = "The child was sitting on the table before it fell";
const word1 = "are";
const word2 = "sitting";

const result1 = info.toLowerCase().includes(word1.toLowerCase());
const result2 = info2.toLowerCase().includes(word2.toLowerCase());

console.log(result1);
console.log(result2);

//5.Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

let title= "A wonderful world";
let newTitle = title.toLowerCase();
let splitted = newTitle.split(" ");

splitted.forEach((word, index)=>{
    splitted[index] = word.charAt(0).toUpperCase() + word.slice(1)
})

console.log(splitted.join(" "));

