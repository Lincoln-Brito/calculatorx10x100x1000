
   
   function calcular(oper) {
   var valor1 = document.calcform.valor1.value;

   if (oper == "multdez") 
   {var res = valor1 * 10;} 
   
   if (oper == "miltcem")
   {var res = valor1 * 100;} 

   if (oper == "multmil") 
   {var res = valor1 * 1000;}

   document.calcform.res.value = res;
}
