function evaluarTest()
{
    let respuestasCorrectas = ["a","b","c","d","b"];
    let respuestasUsuario = new Array();
    let respuestasPregunta = new Array();
    let correctas = 0;
    let contador = 0;
    let bien = "icons8-marca-de-verificación-16.png";
    let mal = "icons8-error-64.png";
    let resultadoString = new Array();

    for (var i = 0;  i < 5; i++)
    {
      respuestasPregunta = document.getElementsByName('p' + (i+1));

      for (var j = 0;  j <=3; j++) 
      {
          if (respuestasPregunta[j].checked == true)
          {
              contador++;
              respuestasUsuario[i]= respuestasPregunta[j].value;

              if(respuestasPregunta[j].value == respuestasCorrectas[i])
              {
                  resultadoString[i] = bien;
                  correctas++;
              }
              else
              {
                  resultadoString[i] = mal;
              }
          }
          
      }
    }
    for (var i = 0; i < 5; i++)
    {
        console.log(" Respuesta "+ (i+1) + " " +respuestasUsuario[i]+ " Imagen " + resultadoString[i]);
    }

    if (contador == 5)
    {
        alert("Bien");
        html="<table class= 'table'>";
        html+="<tr>";
        html+="<td>Pregunta</td>";
        html+="<td>Respuesta Usuario</td>";
        html+="<td>Respuesta Correctas</td>";
        html+="<td>Imagen</td>";
        html+="<tr>";
        for (var i = 0; i < 5; i++)
        {
            html+="<tr>";
            html+="<td>"+(i+1)+"</td>";
            html+="<td>"+ respuestasUsuario[i]+"</td>";
            html+="<td>"+ respuestasCorrectas[i]+"</td>";
            html+="<td><img src="+resultadoString[i]+" width=30 height=30></td>";
            html+="<tr>";
        }
        html+="</table>";
        document.getElementById('resultado').innerHTML=html;

    }
    else
    {
        alert("Falta Constestar Preguntas");
    }


}

function resetTest()
{

    for (var i = 0;  i < 5; i++)
    {
      respuestasPregunta = document.getElementsByName('p' + (i+1));

      for (var j = 0;  j <=3; j++) 
      {
          respuestasPregunta[j].checked == false;
      }
    }  
}