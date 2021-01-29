		var storageID = 'form-autosave';

		var getID = function (field) {
			if (field.id.length > 0){
				return field.id;
			}
			if (field.name.length > 0){
				return field.name;
			}
			return null;
		};

		var loadData = function (){
			var saved = localStorage.getItem(storageID);
			if(!saved) return;
			saved = JSON.parse(saved);

			var fields = document.querySelectorAll("#save-me input, #save-me textarea");

			Array.prototype.slice.call(fields).forEach(function (field){
				var id = getID(field);
				if(!id) return;

				if (!saved[id]) return;

				field.value = saved[id];
			});
		};

		var inputHandler = function (event){
			if(!event.target.closest('#save-me')) return;

			var id = getID(event.target);
			if (!id) return;

			var saved = localStorage.getItem(storageID);
			saved = saved ? JSON.parse(saved) : {};

			saved[id] = event.target.value;

			localStorage.setItem(storageID, JSON.stringify(saved));
		};

		var submitHandler = function (event) {
			if (event.target.id !== 'save-me') return;

			localStorage.removeItem(storageID);
		};

		loadData();

		document.addEventListener('input', inputHandler, false);
		document.addEventListener('submit', submitHandler, false);
