function reverse(string,i=string.length-1){
    if(i<0){
        return "";
    }
     return string[i]+reverse(string,i-1);
}
let result=reverse("hallow world");
console.log(result)