


console.table(["apple", "orange", "banana"]);


function Preson (firstName , lastName)  {
this.firstName = firstName
this.lastName = lastName
}
const me = new Preson ("tyrone"  , "jonse")

console.table(me);


function   chayakon   (number1 , number2)  {
    this.number1 = number1;
    this.number2 = number2;


}
const you = new chayakon ("namthipt", "frank");

console.table(you);


// an array of arrays

const people =[
    ["typrone", "james"]
    ["janet", "jungkook"],
    ["maria", "seokjin"],
    ["kim", "minyoung"],
    ["kim", "sangmin"]
];
console.table(people);

// an array of objects
function people1 (firstName , lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

    const tyrone = new people1 ("tyrone" , "frank")
        const james = new people1 ("james" , "chayaorn")
                const maria = new people1 ("maria" , "prathumchai")

        console.table([tyrone, james, maria]);
 


// an object whose properties are objects


const family = {};
family.mother = new  people1 ("janet" , "jones")
family.father = new people1 ("james" , "chayaorn")
family.daughter = new people1 ("maria" , "namthipt")

console.table(family);


// Syntaxไวยากรณ์


/*table(data);
table(data, columns);*/

// data
//ข้อมูลที่จะแสดง นี่ต้องเป็นอาร์เรย์หรือวัตถุ


// columns
//อาร์เรย์ที่มีชื่อของคอลัมน์ที่จะรวมไว้ในเอาต์พุต