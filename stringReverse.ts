let arr = ["Hello , my bro"];
const x = (input) => {
  // Разделяем строку на слова по пробелам и преобразуем их в массив
  const words = input[0].split(" ");
  console.log(words);
  // Объединяем массив слов в одну строку с символами новой строки между ними
  return words.join("\n");
};
console.log(x(arr));
let str = "privet";

const reverseString = (input) => {
  let newStr = "";
  console.log(newStr);
  for (let i = input.length - 1; i >= 0; i--) {
    newStr = newStr + input[i];
  }
  return newStr;
};
console.log(reverseString(str));
function reverseString(str) {
  return str.split("").reverse().join("");
}
