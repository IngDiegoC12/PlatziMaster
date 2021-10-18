var prueba = ['Hola', 'variable','hi5s'];
var a = prueba[0].length;
var c = prueba[1].length;
var b = prueba[2].length;
var h = [a,c,b];
//console.log(h);
var resultado =h.indexOf(Math.max.apply(null,h));
console.log(resultado);
//var t = prueba.length;

//console.log(t);
//console.log(prueba[0].length);
//console.log(prueba[1].length);
//console.log(prueba[2].length);

//function pruebaMaster (cadena)
//{
    //var t = cadena.length;
    //console.log(t);

    //for (i = 0; i < t; i++)
   // {
       
       //var resultado = 0;
      // var h = [];
     //  h.push(cadena[i].length);
      // h.push(cadena[i++].length);
      // console.log(h);
      // var resultado = Math.max(h);
      // console.log(resultado);

       //if ( h > resultado )//|| cadena[i] > cadena[i+1])
       //{
         //  resultado = cadena[i];
           //var p = cadena.indexOf(cadena[i])
           //console.log(resultado);
       //}
     
    //}
//}

//pruebaMaster(prueba);

