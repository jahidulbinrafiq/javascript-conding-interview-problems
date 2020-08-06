let str=`\`tempalate literals use backticks\` instead of quotes`;
console.log(str);
console.log(str.length);
console.log(typeof str);


const firstName="justin";
const lastName = "TimberLake";
const fullName =firstName+' '+lastName+" say Hi";
console.log("Without template iterals: ",fullName)

//use of  Template Literals
const fullName1=`${firstName} ${lastName} say hi`;
console.log("With template iterals: ",fullName1);

//tempate literal  implementation in calculation
const calculation=`${10+20*30}`;
console.log("tempate literal  implementation in calculation:",calculation);



//Multipline 

const multiPline=" I try my best level\n"
                 +" Learning JavaScript path will be easy if you help me\n"
                 +" JavaScript will be complete within few days";
console.log(multiPline);

//using template  literal 

const multiPline1=`
                  I try my best level
                  Learning JavaScript path will be easy if you help me
                  JavaScript will be complete within few days`;
console.log(multiPline1);
