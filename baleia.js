var expectativavida = 200;
var totalfilhotes = expectativavida / 4;
var mediafilhotes = totalfilhotes / (expectativavida / 10);

var resultado = document.getElementById("resultado");
resultado.innerHTML = "<p>As baleias da Groenlandia estao entre os animais que vivem mais tempo na Terra, em media 200 anos. A reproducao se da a cada 4 anos, tendo somente 1 filhote por vez. Calcule o total de filhotes ao longo da vida e a media de filhotes de uma baleia dessa especie por decada: </p>"
resultado.innerHTML += "<p>Total de filhotes ao longo da vida: " + totalfilhotes + "</p>";
resultado.innerHTML += "<p>Media de filhotes por decada: " + mediafilhotes + "</p>";