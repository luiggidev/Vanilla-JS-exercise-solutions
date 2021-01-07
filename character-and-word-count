// Define variaveis
var text = document.querySelector('#text');
var wordCount = document.querySelector('#word-count');
var charCount = document.querySelector('#character-count');

// Escuta mudanças no conteudo da area de texto
text.addEventListener('input', function () {

    // Pegar numero de palavras
    
    // Usa padrão regex pra considerar não só espacos mas tambem quebra de linhas
    // Depois de separar os valores com slip usa .filter pra garantir que os valores são pelo menos > 0, do contrario " " seria contado como palavra
	var words = text.value.split(/[\n\r\s]+/g).filter(function (word) {
		return word.length > 0;
	});

	// Mostra n palavras
	wordCount.textContent = words.length;

	// Mostra n caracteres
	charCount.textContent = text.value.length;

}, false);
