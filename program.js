function checkRevese(str) {
let reverseString ='';
for (let i =str.length =1 ; i>=0; i--){
reverseString+=str[i];
}
if(reverseString===str){
return true ;
}
else{
    console.log(false) ;
}
}
console.log(checkRevese('salam'));
