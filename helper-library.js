        var _ = (function () {
            var methods = {};
            
            // Convert an array-like object into an array
            methods.toArray = function (list) {
                return Array.prototype.slice.call(list);
            };

            // Get the fisrt element that match a selector
            methods.get = function (selector) {
                return document.querySelector(selector);
            };

            // Get All elements that match that selector. 'Uses toArray'
            methods.getAll = function (selector) {
                return methods.toArray(document.querySelectorAll(selector));
            };

            // Add a class to all elements in an array. 'Uses getAll'
            methods.addClass = function ( elems, className ) {
                elems.forEach(function ( elem ) {
                    // # O Element.classList é uma propriedade somente leitura que retorna uma coleção DOMTokenList ativa dos atributos de classe do elemento.
                    // # Metodos add, remove, item, toggle e contains
                    elem.classList.add( className );
                });
            };

            // Remove a class to all elements in an array. 'Uses getAll'
            methods.removeClass = function ( elems, className ) {
                elems.forEach(function ( elem ) {
                    elem.classList.remove( className );
                });
            };

            // Return public methods
            return methods;

        }) ();
