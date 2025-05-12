let promptInput = prompt("Enter a sentence:");

//With Prompt

let formattedPrompt = promptInput
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())


console.log("Formatted Prompt:", formattedPrompt);

// Without Prompt

const words = ["apple", "bANana", "CHERRY", "grApe"];
const formattedArray = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let formattedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  formattedArray.push(formattedWord);
}
console.log("Formatted Array:", formattedArray);


// let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere sapiente magni cum! Rerum ipsa corrupti animi? Quo odio sequi laboriosam quos suscipit possimus. Omnis a voluptate repellendus culpa eveniet?";

// let userfind = "omnis";
// let counter = 0;

// let lowerStr = str.toLowerCase();
// let lowerUserfind = userfind.toLowerCase();

// for (let i = 0; i < lowerStr.length; i++) {
//     if (lowerUserfind === lowerStr.slice(i, i + lowerUserfind.length)) {
//         ++counter;
//         console.log("Match");
//     } else {
//         console.log("Not Match");
//     }
// }

// console.log("Total matches:", counter);
