function bmi(w,h){
    let B=w/(h*h);
    if (B<18.5){
        return(`your BMI is ${B},so your underweight`)
    }
    else if(B>24.9){
        return(`your BMI is ${B},so your overweight`)
    }
    else{
         return(`your BMI is ${B},so your weight is normal`)
    }
}
a=bmi(65,1.8);
console.log(a);