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
const arr = [10, 20, 30];

arr.push(40);
console.log(arr);

arr.pop();
console.log(arr);

//WAP TO CHECK A NUMBER IS ARMSTRONG OR NOT

function isArmstrong(num){
    let sum=0;
    let temp=num;
    const numDigits = temp.toString().length;
    while(temp>0){
        let digit =temp%10;
        sum+=Math.pow(digit,numDigits);
        temp=Math.floor(temp/10);
    }
    return sum == num;
}
function checkandshow(){
    let val=document.getElementById("val").value;
    let para=document.createElement("p");
    if(isArmstrong(val)){
        para.innerHTML = val + " is <b style='color: green;'>an Armstrong number</b>";
        }
    else{
        para.innerHTML = val + " is <b style='color: red;'>not an Armstrong number</b>";
    }
    document.getElementsByTagName("body")[0].append(para);
}