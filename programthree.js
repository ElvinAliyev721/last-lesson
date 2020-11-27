function removeword(str,word){
let str1 = '';
for(let i=0;i<str.length;i++){
if(str[i]!==word){
str1+=str[i];


}
}
console.log(str1);
}
console.log(removeword('Elvin','i'));