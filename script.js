let promptInput = prompt("Enter a sentence:");

//With Prompt

let formattedPrompt = promptInput
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

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


