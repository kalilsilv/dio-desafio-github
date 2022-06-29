function ala (A,B) {
  if (!isNaN(A, B)) {
    let result = A;
     
    for(let i = A; i < B; i++){
      result = result + (A+1);
      A++;
    } 
    console.log(result);
  }else{
    console.log("Valor inválido") ;
  }
  
  
}

ala ('a', 3);