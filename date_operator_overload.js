// creating yesterday date
// http://stackoverflow.com/a/5511376
var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

// javascript doesn't support operator overloading but you can do
console.log(new Date() - yesterday);