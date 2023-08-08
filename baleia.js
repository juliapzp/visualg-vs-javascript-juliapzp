var expectativavida = 200;
var totalfilhotes = expectativavida / 4;
var mediafilhotes = totalfilhotes / (expectativavida / 10);

var resultado = document.getElementById("resultado");
resultado.innerHTML = "<p>Total de filhotes ao longo da vida: " + totalfilhotes + "</p>";
resultado.innerHTML += "<p>Media de filhotes por decada: " + mediafilhotes + "</p>";