

// syntex
/*
group()
group(label)*/

// example
console.log("This is the output level")
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3")
console.groupEnd();
console.log("Back to Leve 2");
console.groupEnd();
console.log("Back to outer level");