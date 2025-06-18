let a=[1,2,3,4,5];
let b=[6,7,8,9,10];
console.log("concatenation:"+a.concat(b));
console.log("splicing:"+a.splice(2,3));
console.log(a);
let c=[67,8,35,59,20];
console.log("sorting array:"+c.sort());
function find(d){
    for(let i=0;i<c.length;i++){
        if(c[i]==d){
            return true;
        }
        
    }
    return false;
}
console.log("finding num8:"+c.includes(8));
console.log("finding num 35:"+find(35));
console.log("index of 8:"+c.indexOf(8));