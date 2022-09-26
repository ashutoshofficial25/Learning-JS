let name = "Anonomous";

name.substring(0, 2); //An => incluse first valus and ignore lastone
name.slice(1, 3); // no => works same
name.substr(2, 2); // start and length

name.toLowerCase();
name.toUpperCase();

let fname = "Ashutosh";
let lname = "Maurya";
let fullname = fname.concat(" ", lname);

//Indexof

let str = "Please locate where 'locate' occurs!";
let index = str.indexOf("locate"); //7

let lastIndex = str.lastIndexOf("locate"); // returns last index
//return -1 if not found

console.log(str.search("Please"));

str.includes("soem"); // returns boolean

// replace method
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);
