        var $  =(function () {

        
            // Creates Constructor. Returns string of selectors to use.
            var Constructor = function ( selector ){
                this.elems = document.querySelectorAll( selector );
            }

            // Get an immutable copy of the matching elements. Returns array the elements.
            Constructor.prototype.items = function (){
                return Array.prototype.slice.call(this.elems);
            };

            // Get first item in a set of elements.
            Constructor.prototype.first = function(){
                return this.elems[0];
            };

            // Get last item in set of elements.
            Constructor.prototype.last = function(){
                return this.elems[this.elems.length-1];
            };

            // Add a class to every item in a set of elements. Uses string className to be added.
            Constructor.prototype.addClass = function( className ){
                // Uses created items() to convert nodelist to array as a immutable copy.
                this.items().forEach(function (elem){
                    // use the classList API to remove and add classes.
                    elem.classList.add(className);
                });
            };

            // remove a class to every item in a set of elements. Uses string className to be removed.
            Constructor.prototype.removeClass = function( className ){
                // Uses created items() to convert nodelist to array as a immutable copy.
                this.items().forEach(function (elem){
                    elem.classList.remove(className);
                });
            };

            // Returns the Constructor
            return Constructor;

        })();
