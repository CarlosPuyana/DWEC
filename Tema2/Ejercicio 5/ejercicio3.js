var numerostres=" "
var primos=" "
primo=true


for (let index = 0; index < 500; index++) {
    if(index%3==0) {
        numerostres=index+" " + numerostres
        
    }
    
    
}

for (let index = 0; index < 500; index++) {
for (let j = 2; j < index/2; j++) {
    if (index%j==0) {
        primo=false
    }
}

 if (primo=false) {
     primos=index
 }
}



console.log(numerostres)
console.log("Primos")
console.log(primos)