	// defining variables for query selectors
	// define variaveis pro query selectors
	var quote = document.querySelector("#quote");
	var btn = document.querySelector("#get-quote");
	
	var getQuote = function () {
		// Adicionar tag desativado ao botão até que recupere novos dados

		btn.disabled = true;

		fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then( function (response){
			// A propriedade ok somente leitura da interface Response contém um booleano informando se a resposta foi bem-sucedida
			if (response.ok){
				// A API Fetch usa streams. Recolhe nossos dados da API como um objeto JSON, podemos usar um método nativo da Fetch API: json()
				return response.json();
			}
			else{ return Promise.reject(response); }
		}).then( function (data) {
			// Define o novo conteúdo para cotação e define btn disable para false			quote.textContent = data[0];
			btn.disabled = false;
		}).catch( function (error) {
			quote.textContent = '[Something went wrong, sorry!] I have a joke for you... The government in this town is excellent, and uses your tax dollars efficiently.';
		});
	};
	// Adiciona event listener para btn click para alterar o valor da cotação usando a função getQuote
	btn.addEventListener('click', getQuote, false);
