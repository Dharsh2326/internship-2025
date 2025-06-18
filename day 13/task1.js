var fruits=["apple","orange","banana","Mango","Grapes"];
console.log("third element name:"+fruits[2]);
fruits.push("guava");
console.log("after pushing an element:"+fruits);
fruits.shift();
console.log("after using shift:"+fruits);
console.log("length of array:" +fruits.length);
for(let i=0;i<fruits.length;i++){
    console.log("loop elements:"+fruits[i]);
}
fruits.reverse()
console.log("after reversing:"+fruits);
let num=[1,2,3,4,5];
var sm=0;
for(var i=0;i<num.length;i++){
    sm=sm+num[i];
}
    console.log(sm);