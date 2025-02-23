function decryptMessage(message) {
 let result = " ";
 for(i = 0; i <= message; i++){
 result += i + result;
 }
 return(result);
}

console.log(decryptMessage); 