let a=5;
console.log(a,typeof a);
a='hello';
console.log(a,typeof a);
a=true;
console.log(a,typeof a);
a=null;
console.log(a,typeof a);
a=undefined;
console.log(a,typeof a);
var myObj={
    name:"Aditya",
    show:showName
};
myObj.show();
function showName(){
    console.log(myObj.name);
}