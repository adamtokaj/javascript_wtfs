// setting cookie for example
document.cookie = "username=my4n; expires=Thu, 19 Jan 2038 03:14:07 GMT; path=/";

// this returns all your cookies on domain that is script executed
var cookie = document.cookie;
console.log(cookie); // notice that you cannot see expiration date nor the path

// you could think that clearing those cookies is just assign empty string but this does not work
document.cookie = "";
console.log(document.cookie);
console.log(cookie !== document.cookie); // true, because of semicolon in the end of the string

// proper way to clear cookie is to set date from the past
document.cookie = "username=my4n; expires=Thu, 1 Jan 1970 00:00:00 UTC; path=/";
console.log(document.cookie);
console.log(cookie !== document.cookie);