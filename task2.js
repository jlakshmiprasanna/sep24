// Question-1
function extractMiddleUppercase(str) {
    let middleIndex = Math.floor(str.length / 2);
    let middlePart = str[middleIndex];
    return middlePart.toUpperCase();
}
console.log(extractMiddleUppercase("abcdef"));

// Question-2
function uppercaseAndLength(str) {
    let upperStr = str.toUpperCase();
    return upperStr.length;
}
console.log(uppercaseAndLength("hello world")); 

// Question-3
function getCharAndAscii(str, position) {
    let char = str.charAt(position);
    let asciiValue = char.charCodeAt(0);
    return asciiValue;
}
console.log(getCharAndAscii("hello", 1)); 

// Question-4
function trimAndSlice(str) {
    let trimmedStr = str.trim();
    return trimmedStr.slice(1, 4);
}
console.log(trimAndSlice("   hello world   ")); 

// Question-5
function concatWithLowercase(str1, str2) {
    let lowerStr2 = str2.toLowerCase();
    return str1 + lowerStr2;
}
console.log(concatWithLowercase("Hello", "WORLD")); 

// Question-6
function removeLeadingAndSlice(str) {
    let trimmedStr = str.trimStart();
    return trimmedStr.slice(1);
}
console.log(removeLeadingAndSlice("   Hello World")); 

// Question-7
function charToUpper(str, position) {
    return str.charAt(position).toUpperCase();
}
console.log(charToUpper("hello", 2)); 

// Question-8
function removeTrailingAndConcat(str1, str2) {
    let trimmedStr1 = str1.trimEnd();
    return trimmedStr1 + str2;
}
console.log(removeTrailingAndConcat("Hello   ", "World")); 

// Question-9
function trimUppercaseSlice(str) {
    let trimmedStr = str.trim();
    let upperStr = trimmedStr.toUpperCase();
    return upperStr.slice(1, 5);
}
let input = "   HelloWorld   ";
console.log(trimUppercaseSlice(input)); 

// Question-10
function concatLowerAndFirstChar(str1, str2) {
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let concatenated = lowerStr1 + " " + lowerStr2;
    return concatenated.charAt(0);
}
let string1 = "HELLO";
let string2 = "WORLD";
console.log(concatLowerAndFirstChar(string1, string2));
