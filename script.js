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

  // Word Finder

  let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere sapiente magni cum! Rerum ipsa corrupti animi? Quo odio sequi laboriosam quos suscipit possimus. Omnis a voluptate repellendus culpa eveniet?";

let userfind = "omnis";
let counter = 0;
for(let i = 0;i<str.length;i++){
    if(userfind==str.slice(i,i+userfind.length)){
        ++counter;
        console.log("match");
        
    }else{
        console.log("Not Match");
        
    }

}
  formattedArray.push(formattedWord);
}
console.log("Formatted Array:", formattedArray);


